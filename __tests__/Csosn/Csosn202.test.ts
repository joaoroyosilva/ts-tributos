import { Produto } from '../../src/Entidade/produto';
import { TipoDesconto } from '../../src/Flags/TipoDesconto';
import { Csosn202 } from '../../src/Impostos/Csosn/Csosn202';
import { Utils } from '../../src/utils/Utils';

describe('Testa Csosn202', () => {
  test('teste calculo de csosn 202', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 1;
    produto.valorProduto = 2000;
    produto.percentualIcms = 18;
    produto.percentualIcmsSt = 18;
    produto.percentualIpi = 15;
    produto.percentualMva = 40;

    const utils = new Utils();
    const csosn202 = new Csosn202();
    csosn202.calcula(produto);

    expect(utils.round(csosn202.percentualIcmsSt)).toBe(18);
    expect(utils.round(csosn202.percentualReducaoSt)).toBe(0);
    expect(utils.round(csosn202.valorBcIcmsSt)).toBe(3220);
    expect(utils.round(csosn202.valorIcmsSt)).toBe(219.6);
  });

  test('teste calculo de csosn 202 com desconto condicional', () => {
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
    const csosn202 = new Csosn202();
    csosn202.tipoDesconto = TipoDesconto.condicional;
    csosn202.calcula(produto);

    expect(utils.round(csosn202.percentualIcmsSt)).toBe(18);
    expect(utils.round(csosn202.percentualReducaoSt)).toBe(0);
    expect(utils.round(csosn202.valorBcIcmsSt)).toBe(3220);
    expect(utils.round(csosn202.valorIcmsSt)).toBe(219.6);
  });
});
