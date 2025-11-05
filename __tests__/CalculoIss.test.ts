import { Produto } from '../src/Entidade/produto';
import { FacadeCalculadoraTributacao } from '../src/Facade/FacadeCalculadoraTributacao';
import { TipoDesconto } from '../src/Flags/TipoDesconto';
import { IResultadoCalculoIssqn } from '../src/Impostos/IResultadoCalculoIssqn';
import { Utils } from '../src/utils/Utils';

describe('Testa cálculo de iss', () => {
  test('calcula iss com quantidade um', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 1;
    produto.valorProduto = 1000;
    produto.percentualIssqn = 2;
    produto.isServico = true;

    const facade = new FacadeCalculadoraTributacao(produto);

    const resultadoCalculoIssqn: IResultadoCalculoIssqn = facade.calculaIssqn();

    expect(new Utils().round(resultadoCalculoIssqn.baseCalculoInss)).toBe(1000);
    expect(new Utils().round(resultadoCalculoIssqn.valor)).toBe(20);
  });

  test('calcula iss com desconto condicional', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 2;
    produto.valorProduto = 2000;
    produto.desconto = 1000;
    produto.percentualIssqn = 2;
    produto.isServico = true;

    const facade = new FacadeCalculadoraTributacao(
      produto,
      TipoDesconto.condicional
    );

    const resultadoCalculoIssqn: IResultadoCalculoIssqn = facade.calculaIssqn();

    expect(new Utils().round(resultadoCalculoIssqn.baseCalculoInss)).toBe(5000);
    expect(new Utils().round(resultadoCalculoIssqn.valor)).toBe(100);
  });
});
