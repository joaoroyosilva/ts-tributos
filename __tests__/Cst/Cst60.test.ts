import { Produto } from '../../src/Entidade/produto';
import { Cst } from '../../src/Flags/Cst';
import { Cst60 } from '../../src/Impostos/Csts/Cst60';

describe('Testa Cst60', () => {
  test('calcula icms', () => {
    let produto = new Produto();
    produto.quantidadeProduto = 1;
    produto.valorProduto = 1000;
    produto.percentualIcmsEfetivo = 20;
    produto.cst = Cst.cst30;

    const cst = new Cst60();
    cst.calcula(produto);

    expect(cst.baseCalculoIcmsEfetivo).toBe(1000);
    expect(cst.valorIcmsEfetivo).toBe(200);
  });
});
