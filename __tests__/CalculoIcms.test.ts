import { Produto } from '../src/Entidade/produto';
import { FacadeCalculadoraTributacao } from '../src/Facade/FacadeCalculadoraTributacao';
import { TipoDesconto } from '../src/Flags/TipoDesconto';
import { Utils } from '../src/utils/Utils';

describe('Testa cálculo de icms', () => {
  test('calcula icms com quantidade um', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 1;
    produto.valorProduto = 1000;
    produto.percentualIcms = 17;

    const facade = new FacadeCalculadoraTributacao(produto);

    const resultadoCalculoIcms = facade.calculaIcms();

    expect(new Utils().round(resultadoCalculoIcms.baseCalculo)).toBe(1000);
    expect(new Utils().round(resultadoCalculoIcms.valor)).toBe(170);
  });

  test('calcula icms com quantidade dois', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 2;
    produto.valorProduto = 2000;
    produto.percentualIcms = 17;

    const facade = new FacadeCalculadoraTributacao(produto);

    const resultadoCalculoIcms = facade.calculaIcms();

    expect(new Utils().round(resultadoCalculoIcms.baseCalculo)).toBe(4000);
    expect(new Utils().round(resultadoCalculoIcms.valor)).toBe(680);
  });

  test('calcula icms com desconto condicional', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 2;
    produto.valorProduto = 2000;
    produto.desconto = 1000;
    produto.percentualIcms = 12;

    const facade = new FacadeCalculadoraTributacao(
      produto,
      TipoDesconto.condicional
    );

    const resultadoCalculoIcms = facade.calculaIcms();

    expect(new Utils().round(resultadoCalculoIcms.baseCalculo)).toBe(5000);
    expect(new Utils().round(resultadoCalculoIcms.valor)).toBe(600);
  });

  test('calcula icms com redução', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 2;
    produto.valorProduto = 2000;
    produto.desconto = 1000;
    produto.percentualIcms = 7;
    produto.percentualReducao = 25;

    const facade = new FacadeCalculadoraTributacao(
      produto,
      TipoDesconto.condicional
    );

    const resultadoCalculoIcms = facade.calculaIcms();

    expect(new Utils().round(resultadoCalculoIcms.baseCalculo)).toBe(3750);
    expect(new Utils().round(resultadoCalculoIcms.valor)).toBe(262.5);
  });

  test('calcula icms com frete', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 2;
    produto.valorProduto = 2000;
    produto.desconto = 1000;
    produto.percentualIcms = 15;
    produto.percentualReducao = 25;
    produto.frete = 373.5;

    const facade = new FacadeCalculadoraTributacao(
      produto,
      TipoDesconto.condicional
    );

    const resultadoCalculoIcms = facade.calculaIcms();

    expect(new Utils().round(resultadoCalculoIcms.baseCalculo)).toBe(4030.13);
    expect(new Utils().round(resultadoCalculoIcms.valor)).toBe(604.52);
  });

  test('calcula icms com outras despesas e seguro', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 2;
    produto.valorProduto = 2000;
    produto.desconto = 1000;
    produto.percentualIcms = 12;
    produto.percentualReducao = 25;
    produto.frete = 373.5;
    produto.outrasDespesas = 233.1;
    produto.seguro = 5.73;

    const facade = new FacadeCalculadoraTributacao(
      produto,
      TipoDesconto.condicional
    );

    const resultadoCalculoIcms = facade.calculaIcms();

    expect(new Utils().round(resultadoCalculoIcms.baseCalculo)).toBe(4209.25);
    expect(new Utils().round(resultadoCalculoIcms.valor)).toBe(505.11);
  });
});
