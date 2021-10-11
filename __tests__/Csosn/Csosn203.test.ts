import { Produto } from '../../src/Entidade/produto';
import { TipoDesconto } from '../../src/Flags/TipoDesconto';
import { Csosn203 } from '../../src/Impostos/Csosn/Csosn203';
import { Utils } from '../../src/utils/Utils';

describe('Testa Csosn203', () => {
  test('teste calculo de csosn 203', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 1;
    produto.valorProduto = 2000;
    produto.percentualIcms = 18;
    produto.percentualIcmsSt = 18;
    produto.percentualIpi = 15;
    produto.percentualMva = 40;

    const utils = new Utils();
    const csosn203 = new Csosn203();
    csosn203.calcula(produto);

    expect(utils.round(csosn203.percentualIcmsSt)).toBe(18);
    expect(utils.round(csosn203.percentualReducaoSt)).toBe(0);
    expect(utils.round(csosn203.valorBcIcmsSt)).toBe(3220);
    expect(utils.round(csosn203.valorIcmsSt)).toBe(219.6);
  });

  test('teste calculo de csosn 203 com desconto condicional', () => {
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
    const csosn203 = new Csosn203();
    csosn203.tipoDesconto = TipoDesconto.condicional;
    csosn203.calcula(produto);

    expect(utils.round(csosn203.percentualIcmsSt)).toBe(18);
    expect(utils.round(csosn203.percentualReducaoSt)).toBe(0);
    expect(utils.round(csosn203.valorBcIcmsSt)).toBe(3220);
    expect(utils.round(csosn203.valorIcmsSt)).toBe(219.6);
  });
});
