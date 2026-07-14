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
    produto.icmsSobreIpi = true;

    const utils = new Utils();

    const facade = new FacadeCalculadoraTributacao(produto);

    const resultadoCalculoPis = facade.calculaPis();
    expect(utils.round(resultadoCalculoPis.baseCalculo)).toBe(1010);
    // 1010 × 1,65% = 16,665 (empate) → 16,66 por half-even (NT 007), paridade com php-tributos.
    expect(utils.round(resultadoCalculoPis.valor)).toBe(16.66);
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

  test('testa calcula cofins com deducao de icms', () => {
    let produto = new Produto();
    produto.percentualPis = 1.65;
    produto.valorProduto = 1000;
    produto.deduzIcmsPisCofins = true;
    produto.percentualIcms = 12;
    produto.valorIcms = 120;
    produto.quantidadeProduto = 1;

    const utils = new Utils();

    const facade = new FacadeCalculadoraTributacao(produto);

    const resultadoCalculoPis = facade.calculaPis();
    expect(utils.round(resultadoCalculoPis.baseCalculo)).toBe(880);
    expect(utils.round(resultadoCalculoPis.valor)).toBe(14.52);
  });

  test('vPis usa arredondamento bancario (half-even) - NT 007', () => {
    let produto = new Produto();
    produto.percentualPis = 1.625;
    produto.valorProduto = 100;
    produto.quantidadeProduto = 1;

    const facade = new FacadeCalculadoraTributacao(produto);

    // Base 100 × 1,625% = 1,625 (empate) → 1,62 (half-even), não 1,63 (half-up).
    expect(facade.calculaPis().valor).toBe(1.62);
  });
});
