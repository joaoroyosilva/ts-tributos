import { Produto } from '../../src/Entidade/produto';
import { FacadeCalculadoraTributacao } from '../../src/Facade/FacadeCalculadoraTributacao';
import { DadosMensagemDifal } from '../../src/Impostos/Implementacoes/DadosMensagemDifal';
import { Utils } from '../../src/utils/Utils';

describe('Testa CalculaDifal e FCP', () => {
  test('calcula difal junto com fcp', () => {
    let produto = new Produto();
    produto.valorProduto = 845;
    produto.quantidadeProduto = 1;
    produto.frete = 35;
    produto.outrasDespesas = 80;
    produto.desconto = 10;
    produto.valorIpi = 50;
    produto.ipiSobreIcms = true;
    produto.percentualFcp = 2;
    produto.percentualDifalInterna = 18;
    produto.percentualDifalInterestadual = 12;

    const facade = new FacadeCalculadoraTributacao(produto);
    const utils = new Utils();

    const resultadoCalculoDifal = facade.calculaDifal();

    expect(utils.round(resultadoCalculoDifal.baseCalculo)).toBe(1000);
    expect(utils.round(resultadoCalculoDifal.fcp)).toBe(20);
    expect(utils.round(resultadoCalculoDifal.difal)).toBe(60);
    expect(utils.round(resultadoCalculoDifal.valorIcmsDestino)).toBe(60);
    expect(utils.round(resultadoCalculoDifal.valorIcmsOrigem)).toBe(0);
    expect(
      resultadoCalculoDifal.getObservacao(
        new DadosMensagemDifal(
          utils.round(resultadoCalculoDifal.fcp),
          utils.round(resultadoCalculoDifal.valorIcmsDestino),
          utils.round(resultadoCalculoDifal.valorIcmsOrigem)
        )
      )
    ).toBe(
      'Valores totais do ICMS interstadual: DIFAL da UF destino 60,00 + FCP 20,00; DIFAL da UF Origem 0,00'
    );
  });
});
