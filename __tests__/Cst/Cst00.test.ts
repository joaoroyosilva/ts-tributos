import { Produto } from '../../src/Entidade/produto';
import { OrigemMercadoria } from '../../src/Flags/OrigemMercadoria';
import { TipoDesconto } from '../../src/Flags/TipoDesconto';
import { Cst00 } from '../../src/Impostos/Csts/Cst00';

describe('Testa Cst00', () => {
  test('calcula icms', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 1;
    produto.valorProduto = 1000;
    produto.percentualIcms = 18;

    const cst = new Cst00();
    cst.calcula(produto);

    expect(cst.valorBcIcms).toBe(1000);
    expect(cst.valorIcms).toBe(180);
  });

  test('calcula icms com ipi', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 1;
    produto.valorProduto = 1000;
    produto.percentualIcms = 18;
    produto.valorIpi = 50;
    produto.icmsSobreIpi = true;

    const cst = new Cst00();
    cst.calcula(produto);

    expect(cst.valorBcIcms).toBe(1050);
    expect(cst.valorIcms).toBe(189);
  });

  test('calcula icms com desconto condicional', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 1;
    produto.valorProduto = 1000;
    produto.percentualIcms = 18;
    produto.desconto = 100;

    const cst = new Cst00(OrigemMercadoria.nacional, TipoDesconto.condicional);
    cst.calcula(produto);

    expect(cst.valorBcIcms).toBe(1100);
    expect(cst.valorIcms).toBe(198);
  });

  test('calcula icms com desconto incondicional', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 1;
    produto.valorProduto = 1000;
    produto.percentualIcms = 18;
    produto.desconto = 100;

    const cst = new Cst00();
    cst.calcula(produto);

    expect(cst.valorBcIcms).toBe(900);
    expect(cst.valorIcms).toBe(162);
  });

  test('calcula icms com frete', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 1;
    produto.valorProduto = 1000;
    produto.percentualIcms = 18;
    produto.frete = 100;

    const cst = new Cst00();
    cst.calcula(produto);

    expect(cst.valorBcIcms).toBe(1100);
    expect(cst.valorIcms).toBe(198);
  });
});
