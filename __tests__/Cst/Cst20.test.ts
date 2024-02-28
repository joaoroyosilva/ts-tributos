import { Produto } from '../../src/Entidade/produto';
import { Cst } from '../../src/Flags/Cst';
import { Cst20 } from '../../src/Impostos/Csts/Cst20';

describe('Testa Cst20', () => {
  test('calcula icms desonerado', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 1;
    produto.valorProduto = 1000;
    produto.percentualReducao = 10;
    produto.percentualIcms = 20;
    produto.cst = Cst.cst20;

    const cst = new Cst20();
    cst.calcula(produto);

    expect(cst.valorIcmsDesonerado).toBe(25);
  });
});
