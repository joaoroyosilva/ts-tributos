import { Produto } from '../../src/Entidade/produto';
import { TipoDesconto } from '../../src/Flags/TipoDesconto';
import { Csosn201 } from '../../src/Impostos/Csosn/Csosn201';
import { Utils } from '../../src/utils/Utils';

describe('Testa Csosn201', () => {
  test('teste calculo de csosn 201', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 1;
    produto.valorProduto = 2000;
    produto.percentualIcms = 18;
    produto.percentualIcmsSt = 18;
    produto.percentualIpi = 15;
    produto.percentualMva = 40;
    produto.percentualCredito = 5;

    const utils = new Utils();
    const csosn201 = new Csosn201();
    csosn201.calcula(produto);

    expect(utils.round(csosn201.percentualIcmsSt)).toBe(18);
    expect(utils.round(csosn201.percentualCredito)).toBe(5);
    expect(utils.round(csosn201.percentualMva)).toBe(40);
    expect(utils.round(csosn201.percentualReducaoSt)).toBe(0);
    expect(utils.round(csosn201.valorBcIcmsSt)).toBe(3220);
    expect(utils.round(csosn201.valorIcmsSt)).toBe(219.6);
    expect(utils.round(csosn201.valorCredito)).toBe(100);
  });

  test('teste calculo de csosn 201 com desconto condicional', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 1;
    produto.valorProduto = 1900;
    produto.percentualIcms = 18;
    produto.percentualIcmsSt = 18;
    produto.percentualIpi = 15;
    produto.percentualMva = 40;
    produto.percentualCredito = 5;
    produto.desconto = 100;

    const utils = new Utils();
    const csosn201 = new Csosn201();
    csosn201.tipoDesconto = TipoDesconto.condicional;
    csosn201.calcula(produto);

    expect(utils.round(csosn201.percentualIcmsSt)).toBe(18);
    expect(utils.round(csosn201.percentualCredito)).toBe(5);
    expect(utils.round(csosn201.percentualMva)).toBe(40);
    expect(utils.round(csosn201.percentualReducaoSt)).toBe(0);
    expect(utils.round(csosn201.valorBcIcmsSt)).toBe(3220);
    expect(utils.round(csosn201.valorIcmsSt)).toBe(219.6);
    expect(utils.round(csosn201.valorCredito)).toBe(100);
  });
});
