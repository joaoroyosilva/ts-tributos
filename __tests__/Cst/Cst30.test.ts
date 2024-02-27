import { Produto } from '../../src/Entidade/produto';
import { Cst } from '../../src/Flags/Cst';
import { Cst30 } from '../../src/Impostos/Csts/Cst30';

describe('Testa Cst30', () => {
  test('calcula icms', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 1;
    produto.valorProduto = 1000;
    produto.percentualIcms = 20;
    produto.cst = Cst.cst30;

    const cst = new Cst30();
    cst.calcula(produto);

    expect(cst.valorIcmsDesonerado).toBe(250);
  });
});
