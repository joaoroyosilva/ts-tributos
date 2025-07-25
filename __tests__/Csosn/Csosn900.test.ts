import { Produto } from '../../src/Entidade/produto';
import { TipoDesconto } from '../../src/Flags/TipoDesconto';
import { Csosn900 } from '../../src/Impostos/Csosn/Csosn900';
import { Utils } from '../../src/utils/Utils';

describe('testa Csosn900', () => {
  test('testa csosn 900', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 1;
    produto.valorProduto = 2000;
    produto.percentualCredito = 17;
    produto.percentualIcms = 18;
    produto.percentualIcmsSt = 18;
    produto.icmsSobreIpi = true;
    produto.percentualIpi = 15;
    produto.percentualMva = 40;

    const csosn900 = new Csosn900();

    csosn900.calcula(produto);

    const utils = new Utils();
    expect(utils.round(csosn900.valorCredito)).toBe(391);
    expect(utils.round(csosn900.percentualCredito)).toBe(17);
    expect(utils.round(csosn900.percentualIcmsSt)).toBe(18);
    expect(utils.round(csosn900.percentualMva)).toBe(40);
    expect(utils.round(csosn900.valorBcIcmsSt)).toBe(3220);
    expect(utils.round(csosn900.valorIcmsSt)).toBe(219.6);
    expect(utils.round(csosn900.valorIcms)).toBe(414);
    expect(utils.round(csosn900.valorBcIcms)).toBe(2300);
  });

  test('testa csosn 900 com desconto condicional', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 1;
    produto.valorProduto = 1900;
    produto.desconto = 100;
    produto.percentualCredito = 17;
    produto.percentualIcms = 18;
    produto.percentualIcmsSt = 18;
    produto.icmsSobreIpi = true;
    produto.percentualIpi = 15;
    produto.percentualMva = 40;

    const csosn900 = new Csosn900();
    csosn900.tipoDesconto = TipoDesconto.condicional;
    csosn900.calcula(produto);

    const utils = new Utils();
    expect(utils.round(csosn900.valorCredito)).toBe(391);
    expect(utils.round(csosn900.percentualCredito)).toBe(17);
    expect(utils.round(csosn900.percentualIcmsSt)).toBe(18);
    expect(utils.round(csosn900.percentualMva)).toBe(40);
    expect(utils.round(csosn900.valorBcIcmsSt)).toBe(3220);
    expect(utils.round(csosn900.valorIcmsSt)).toBe(219.6);
    expect(utils.round(csosn900.valorIcms)).toBe(414);
    expect(utils.round(csosn900.valorBcIcms)).toBe(2300);
  });
});
