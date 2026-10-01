import { Produto } from '../src/Entidade/produto';
import { FacadeCalculadoraTributacao } from '../src/Facade/FacadeCalculadoraTributacao';
import { Csosn202 } from '../src/Impostos/Csosn/Csosn202';
import { Cst10 } from '../src/Impostos/Csts/Cst10';
import { Utils } from '../src/utils/Utils';

// Fórmula da base do ICMS-ST: desconto e redução ST aplicados uma vez só, e ST nunca negativo.
// Mesmos números do php-tributos (casos C1–C4, C6, C7, C10 e C16 da change correcao-formula-icms-st).
const utils = new Utils();

function criaProduto(
  percentualIcms = 12,
  percentualIcmsSt = 18,
  percentualMva = 70,
  desconto = 0,
  percentualReducaoSt = 0
): Produto {
  const produto = new Produto();
  produto.valorProduto = 100;
  produto.quantidadeProduto = 1;
  produto.percentualIcms = percentualIcms;
  produto.percentualIcmsSt = percentualIcmsSt;
  produto.percentualMva = percentualMva;
  produto.desconto = desconto;
  produto.percentualReducaoSt = percentualReducaoSt;
  return produto;
}

// [caso, icms, icmsSt, mva, desconto, reducaoSt, baseSt esperada, ST esperado]
const casos: [string, number, number, number, number, number, number, number][] = [
  ['C1 sem desconto, sem redução', 12, 18, 70, 0, 0, 170, 18.6],
  ['C2 desconto 10', 12, 18, 70, 10, 0, 153, 16.74],
  ['C3 redução ST 30%', 12, 18, 70, 0, 30, 119, 9.42],
  ['C4 redução 30% + desconto 10', 12, 18, 70, 10, 30, 107.1, 8.48],
  ['C6 ST abaixo do ICMS próprio vira 0', 17, 12, 0, 0, 0, 100, 0],
  ['C10a 17/17 desconto 10', 17, 17, 70, 10, 0, 153, 10.71],
  ['C10b 17/17 redução 30%', 17, 17, 70, 0, 30, 119, 3.23],
];

describe('Fórmula do ICMS-ST', () => {
  test.each(casos)(
    'Csosn202 %s',
    (_caso, icms, icmsSt, mva, desconto, reducaoSt, baseEsperada, stEsperado) => {
      const csosn = new Csosn202();
      csosn.calcula(criaProduto(icms, icmsSt, mva, desconto, reducaoSt));

      expect(utils.round(csosn.valorBcIcmsSt)).toBe(baseEsperada);
      expect(utils.round(csosn.valorIcmsSt)).toBe(stEsperado);
    }
  );

  test.each(casos)(
    'Cst10 %s',
    (_caso, icms, icmsSt, mva, desconto, reducaoSt, baseEsperada, stEsperado) => {
      const cst = new Cst10();
      cst.calcula(criaProduto(icms, icmsSt, mva, desconto, reducaoSt));

      expect(utils.round(cst.valorBcIcmsSt)).toBe(baseEsperada);
      expect(utils.round(cst.valorIcmsSt)).toBe(stEsperado);
    }
  );

  test('C6 ST nunca negativo mantém a base', () => {
    const resultado = new FacadeCalculadoraTributacao(
      criaProduto(17, 12, 0)
    ).calculaIcmsSt();

    expect(resultado.valorIcmsSt).toBe(0);
    expect(utils.round(resultado.baseCalculoIcmsSt)).toBe(100);
    expect(utils.round(resultado.valorIcmsProprio)).toBe(17);
  });

  test('C7 FCP-ST usa a mesma base do ST', () => {
    const produto = criaProduto(12, 18, 70, 10);
    produto.percentualFcpSt = 2;

    const resultado = new FacadeCalculadoraTributacao(produto).calculaFcpSt();

    expect(utils.round(resultado.baseCalculoFcpSt)).toBe(153);
    expect(utils.round(resultado.valorFcpSt)).toBe(3.06);
  });

  test('C16 alíquota ST zero zera tudo', () => {
    const csosn = new Csosn202();
    csosn.calcula(criaProduto(17, 0, 70));

    expect(csosn.valorBcIcmsSt).toBe(0);
    expect(csosn.valorIcmsSt).toBe(0);

    const resultado = new FacadeCalculadoraTributacao(
      criaProduto(17, 0, 70)
    ).calculaIcmsSt();
    expect(resultado.valorIcmsProprio).toBe(0);
  });
});
