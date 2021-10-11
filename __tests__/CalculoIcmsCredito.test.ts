import { Produto } from '../src/Entidade/produto';
import { FacadeCalculadoraTributacao } from '../src/Facade/FacadeCalculadoraTributacao';
import { TipoDesconto } from '../src/Flags/TipoDesconto';
import { Utils } from '../src/utils/Utils';

describe('Testa CalculoIcmsCredito', () => {
  test('calcula credito de icms', () => {
    let produto = new Produto();
    produto.valorProduto = 1000;
    produto.quantidadeProduto = 1;
    produto.percentualCredito = 17;

    const facade = new FacadeCalculadoraTributacao(produto);

    const resultado = facade.calculaIcmsCredito();

    expect(resultado.baseCalculo).toBe(1000);
    expect(resultado.valor).toBe(170);
  });

  test('calcula credito de icms com desconto condicional', () => {
    let produto = new Produto();
    produto.valorProduto = 2000;
    produto.desconto = 1000;
    produto.quantidadeProduto = 2;
    produto.percentualCredito = 12;

    const facade = new FacadeCalculadoraTributacao(
      produto,
      TipoDesconto.condicional
    );

    const resultado = facade.calculaIcmsCredito();

    expect(resultado.baseCalculo).toBe(5000);
    expect(resultado.valor).toBe(600);
  });

  test('calcula credito de icms com reducao', () => {
    let produto = new Produto();
    produto.valorProduto = 2000;
    produto.desconto = 1000;
    produto.quantidadeProduto = 2;
    produto.percentualCredito = 7;
    produto.percentualReducao = 25;

    const facade = new FacadeCalculadoraTributacao(
      produto,
      TipoDesconto.condicional
    );

    const resultado = facade.calculaIcmsCredito();

    expect(resultado.baseCalculo).toBe(3750);
    expect(resultado.valor).toBe(262.5);
  });

  test('calcula credito de icms com frete', () => {
    let produto = new Produto();
    produto.valorProduto = 2000;
    produto.desconto = 1000;
    produto.quantidadeProduto = 2;
    produto.percentualCredito = 15;
    produto.percentualReducao = 25;
    produto.frete = 373.5;

    const facade = new FacadeCalculadoraTributacao(
      produto,
      TipoDesconto.condicional
    );

    const resultado = facade.calculaIcmsCredito();

    const utils = new Utils();

    expect(utils.round(resultado.baseCalculo)).toBe(4030.13);
    expect(utils.round(resultado.valor)).toBe(604.52);
  });

  test('calcula credito de icms com outras despesas', () => {
    let produto = new Produto();
    produto.valorProduto = 2000;
    produto.desconto = 1000;
    produto.quantidadeProduto = 2;
    produto.percentualCredito = 12;
    produto.percentualReducao = 25;
    produto.frete = 373.5;
    produto.outrasDespesas = 233.1;
    produto.seguro = 5.73;

    const facade = new FacadeCalculadoraTributacao(
      produto,
      TipoDesconto.condicional
    );

    const resultado = facade.calculaIcmsCredito();

    const utils = new Utils();

    expect(utils.round(resultado.baseCalculo)).toBe(4209.25);
    expect(utils.round(resultado.valor)).toBe(505.11);
  });
});
