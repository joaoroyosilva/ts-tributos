import { Produto } from '../../src/Entidade/produto';
import { Csosn } from '../../src/Flags/Csosn';
import { Csosn500 } from '../../src/Impostos/Csosn/Csosn500';

describe('Testa Csosn500', () => {
  test('calcula icms', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 1;
    produto.valorProduto = 1000;
    produto.percentualIcmsEfetivo = 17;
    produto.csosn = Csosn.csosn500;

    const csosn = new Csosn500();
    csosn.calcula(produto);

    expect(csosn.baseCalculoIcmsEfetivo).toBe(1000);
    expect(csosn.valorIcmsEfetivo).toBe(170);
  });
});
