import { Produto } from '../../src/Entidade/produto';
import { TipoDesconto } from '../../src/Flags/TipoDesconto';
import { Csosn101 } from '../../src/Impostos/Csosn/Csosn101';

describe('Testa Csosn101', () => {
  test('teste calculo de csosn 101', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 1;
    produto.valorProduto = 1000;
    produto.percentualCredito = 17;

    const csosn101 = new Csosn101();
    csosn101.calcula(produto);

    expect(csosn101.valorCredito).toBe(170);
    expect(csosn101.percentualCredito).toBe(17);
  });

  test('teste calculo de csosn 101 com desconto incondicional', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 1;
    produto.valorProduto = 1000;
    produto.percentualCredito = 17;
    produto.desconto = 100;

    const csosn101 = new Csosn101();
    csosn101.calcula(produto);

    expect(csosn101.valorCredito).toBe(153);
    expect(csosn101.percentualCredito).toBe(17);
  });

  test('teste calculo de csosn 101 com desconto condicional', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 1;
    produto.valorProduto = 1000;
    produto.percentualCredito = 17;
    produto.desconto = 100;

    const csosn101 = new Csosn101();
    csosn101.tipoDesconto = TipoDesconto.condicional;
    csosn101.calcula(produto);

    expect(csosn101.valorCredito).toBe(187);
    expect(csosn101.percentualCredito).toBe(17);
  });
});
