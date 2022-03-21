import { Produto } from '../src/Entidade/produto';
import { FacadeCalculadoraTributacao } from '../src/Facade/FacadeCalculadoraTributacao';
import { Utils } from '../src/utils/Utils';

describe('Testa CalculaCofins', () => {
  test('testa calcula cofins', () => {
    let produto = new Produto();
    produto.percentualCofins = 0.65;
    produto.valorProduto = 1000;
    produto.quantidadeProduto = 1;

    const utils = new Utils();

    const facade = new FacadeCalculadoraTributacao(produto);

    const resultadoCalculoCofins = facade.calculaCofins();
    expect(utils.round(resultadoCalculoCofins.baseCalculo)).toBe(1000);
    expect(utils.round(resultadoCalculoCofins.valor)).toBe(6.5);
  });

  test('testa calcula cofins com ipi', () => {
    let produto = new Produto();
    produto.percentualCofins = 0.65;
    produto.valorProduto = 1000;
    produto.quantidadeProduto = 1;
    produto.valorIpi = 10;

    const utils = new Utils();

    const facade = new FacadeCalculadoraTributacao(produto);

    const resultadoCalculoCofins = facade.calculaCofins();
    expect(utils.round(resultadoCalculoCofins.baseCalculo)).toBe(1000);
    expect(utils.round(resultadoCalculoCofins.valor)).toBe(6.5);
  });

  test('testa calcula cofins com ipi zero', () => {
    let produto = new Produto();
    produto.percentualCofins = 0.65;
    produto.valorProduto = 1000;
    produto.quantidadeProduto = 1;
    produto.valorIpi = 0;

    const utils = new Utils();

    const facade = new FacadeCalculadoraTributacao(produto);

    const resultadoCalculoCofins = facade.calculaCofins();
    expect(utils.round(resultadoCalculoCofins.baseCalculo)).toBe(1000);
    expect(utils.round(resultadoCalculoCofins.valor)).toBe(6.5);
  });
});
