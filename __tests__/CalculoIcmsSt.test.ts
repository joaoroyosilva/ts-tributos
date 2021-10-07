import { Produto } from '../src/Entidade/produto';
import { FacadeCalculadoraTributacao } from '../src/Facade/FacadeCalculadoraTributacao';
import { Utils } from '../src/utils/Utils';

describe('Testa CalculaIcmsSt', () => {
  test('calcula icms st', () => {
    let produto = new Produto();
    produto.percentualIcms = 18;
    produto.percentualIcmsSt = 18;
    produto.percentualIpi = 15;
    produto.valorProduto = 2000;
    produto.quantidadeProduto = 1;
    produto.percentualMva = 40;

    const utils = new Utils();

    const facade = new FacadeCalculadoraTributacao(produto);

    const resultadoCalculoIcmsSt = facade.calculaIcmsSt();

    expect(utils.round(resultadoCalculoIcmsSt.baseCalculoOperacaoPropria)).toBe(
      2000
    );

    expect(utils.round(resultadoCalculoIcmsSt.valorIcmsProprio)).toBe(360);

    expect(utils.round(resultadoCalculoIcmsSt.baseCalculoIcmsSt)).toBe(2800);

    expect(utils.round(resultadoCalculoIcmsSt.valorIcmsSt)).toBe(144);
  });
});
