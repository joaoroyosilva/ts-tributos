import { Produto } from '../src/Entidade/produto';
import { FacadeCalculadoraTributacao } from '../src/Facade/FacadeCalculadoraTributacao';
import { TipoDesconto } from '../src/Flags/TipoDesconto';
import { Utils } from '../src/utils/Utils';

describe('Testa cálculo de ipi', () => {
  test('calcula ipi com quantidade um', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 1;
    produto.valorProduto = 1000;
    produto.percentualIpi = 17;

    const facade = new FacadeCalculadoraTributacao(produto);

    const resultadoCalculoIpi = facade.calculaIpi();

    expect(new Utils().round(resultadoCalculoIpi.baseCalculo)).toBe(1000);
    expect(new Utils().round(resultadoCalculoIpi.valor)).toBe(170);
  });

  test('calcula ipi com quantidade dois', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 2;
    produto.valorProduto = 2000;
    produto.percentualIpi = 17;

    const facade = new FacadeCalculadoraTributacao(produto);

    const resultadoCalculoIpi = facade.calculaIpi();

    expect(new Utils().round(resultadoCalculoIpi.baseCalculo)).toBe(4000);
    expect(new Utils().round(resultadoCalculoIpi.valor)).toBe(680);
  });

  test('calcula ipi com desconto condicional', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 2;
    produto.valorProduto = 2000;
    produto.desconto = 1000;
    produto.percentualIpi = 12;

    const facade = new FacadeCalculadoraTributacao(
      produto,
      TipoDesconto.condicional
    );

    const resultadoCalculoIpi = facade.calculaIpi();

    expect(new Utils().round(resultadoCalculoIpi.baseCalculo)).toBe(5000);
    expect(new Utils().round(resultadoCalculoIpi.valor)).toBe(600);
  });

  test('calcula ipi com frete', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 2;
    produto.valorProduto = 2000;
    produto.desconto = 1000;
    produto.percentualIpi = 15;
    produto.frete = 373.5;

    const facade = new FacadeCalculadoraTributacao(
      produto,
      TipoDesconto.condicional
    );

    const resultadoCalculoIpi = facade.calculaIpi();

    expect(new Utils().round(resultadoCalculoIpi.baseCalculo)).toBe(5373.5);
    expect(new Utils().round(resultadoCalculoIpi.valor)).toBe(806.03);
  });

  test('calcula ipi com outras despesas e seguro', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 2;
    produto.valorProduto = 2000;
    produto.desconto = 1000;
    produto.percentualIpi = 12;
    produto.frete = 373.5;
    produto.outrasDespesas = 233.1;
    produto.seguro = 5.73;

    const facade = new FacadeCalculadoraTributacao(
      produto,
      TipoDesconto.condicional
    );

    const resultadoCalculoIpi = facade.calculaIpi();

    expect(new Utils().round(resultadoCalculoIpi.baseCalculo)).toBe(5612.33);
    expect(new Utils().round(resultadoCalculoIpi.valor)).toBe(673.48);
  });
});
