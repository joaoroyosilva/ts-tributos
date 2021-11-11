import { Produto } from '../src/Entidade/produto';
import { FacadeCalculadoraTributacao } from '../src/Facade/FacadeCalculadoraTributacao';
import { Utils } from '../src/utils/Utils';

describe('Testa Calculo fcp', () => {
  test('calcula fcp', () => {
    let produto = new Produto();
    produto.percentualFcp = 2;
    produto.valorProduto = 90;
    produto.desconto = 2.9;
    produto.quantidadeProduto = 1;

    const utils = new Utils();

    const facade = new FacadeCalculadoraTributacao(produto);

    const resultadoCalculoFcp = facade.calculaFcp();

    expect(utils.round(resultadoCalculoFcp.valor)).toBe(1.74);
  });
});
