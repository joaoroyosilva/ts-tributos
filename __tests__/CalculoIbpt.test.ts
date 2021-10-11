import { Produto } from '../src/Entidade/produto';
import { FacadeCalculadoraTributacao } from '../src/Facade/FacadeCalculadoraTributacao';
import { Utils } from '../src/utils/Utils';

describe('Testa CalculoIbpt', () => {
  test('testa calculo do ibpt', () => {
    let produto = new Produto();
    produto.valorProduto = 1000;
    produto.quantidadeProduto = 1;
    produto.percentualFederal = 10;
    produto.percentualFederalImportados = 20;
    produto.percentualEstadual = 15;
    produto.percentualMunicipal = 0;

    const utils = new Utils();

    const facade = new FacadeCalculadoraTributacao(produto);

    const resultadoCalculoIbpt = facade.calculaIbpt(produto);

    expect(utils.round(resultadoCalculoIbpt.baseCalculo)).toBe(1000);
    expect(utils.round(resultadoCalculoIbpt.tributacaoFederal)).toBe(100);
    expect(utils.round(resultadoCalculoIbpt.tributacaoFederalImportados)).toBe(
      200
    );
    expect(utils.round(resultadoCalculoIbpt.tributacaoEstadual)).toBe(150);
    expect(utils.round(resultadoCalculoIbpt.tributacaoMunicipal)).toBe(0);
  });
});
