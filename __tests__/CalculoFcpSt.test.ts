import { Produto } from '../src/Entidade/produto';
import { FacadeCalculadoraTributacao } from '../src/Facade/FacadeCalculadoraTributacao';
import { Utils } from '../src/utils/Utils';

describe('Testa Calculo fcp st', () => {
  test('calcula fcp st', () => {
    let produto = new Produto();
    produto.percentualFcpSt = 2;
    produto.valorProduto = 2000;
    produto.quantidadeProduto = 1;
    produto.percentualMva = 40;

    const utils = new Utils();

    const facade = new FacadeCalculadoraTributacao(produto);

    const resultadoCalculoFcpst = facade.calculaFcpSt();

    expect(utils.round(resultadoCalculoFcpst.valorFcpSt)).toBe(56);
  });
});
