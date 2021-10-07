import { Produto } from '../src/Entidade/produto';
import { FacadeCalculadoraTributacao } from '../src/Facade/FacadeCalculadoraTributacao';
import { Utils } from '../src/utils/Utils';

describe('Testa CalculaPis', () => {
  test('testa calcula cofins', () => {
    let produto = new Produto();
    produto.percentualPis = 1.65;
    produto.valorProduto = 1000;
    produto.quantidadeProduto = 1;

    const utils = new Utils();

    const facade = new FacadeCalculadoraTributacao(produto);

    const resultadoCalculoPis = facade.calculaPis();
    expect(utils.round(resultadoCalculoPis.baseCalculo)).toBe(1000);
    expect(utils.round(resultadoCalculoPis.valor)).toBe(16.5);
  });

  test('testa calcula cofins com ipi', () => {
    let produto = new Produto();
    produto.percentualPis = 1.65;
    produto.valorProduto = 1000;
    produto.quantidadeProduto = 1;
    produto.valorIpi = 10;

    const utils = new Utils();

    const facade = new FacadeCalculadoraTributacao(produto);

    const resultadoCalculoPis = facade.calculaPis();
    expect(utils.round(resultadoCalculoPis.baseCalculo)).toBe(1010);
    expect(utils.round(resultadoCalculoPis.valor)).toBe(16.67);
  });

  test('testa calcula cofins com ipi zero', () => {
    let produto = new Produto();
    produto.percentualPis = 1.65;
    produto.valorProduto = 1000;
    produto.quantidadeProduto = 1;
    produto.valorIpi = 0;

    const utils = new Utils();

    const facade = new FacadeCalculadoraTributacao(produto);

    const resultadoCalculoPis = facade.calculaPis();
    expect(utils.round(resultadoCalculoPis.baseCalculo)).toBe(1000);
    expect(utils.round(resultadoCalculoPis.valor)).toBe(16.5);
  });
});
