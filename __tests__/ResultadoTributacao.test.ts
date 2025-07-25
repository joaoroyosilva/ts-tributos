import { Produto } from '../src/Entidade/produto';
import { Crt } from '../src/Flags/Crt';
import { Csosn } from '../src/Flags/Csosn';
import { Cst } from '../src/Flags/Cst';
import { Documento } from '../src/Flags/Documento';
import { TipoOperacao } from '../src/Flags/TipoOperacao';
import { TipoPessoa } from '../src/Flags/TipoPessoa';
import { ResultadoTributacao } from '../src/Impostos/Implementacoes/ResultadoTributacao';
import { Utils } from '../src/utils/Utils';

describe('Testa resultado tributacao', () => {
  function criaObjetoProduto(): Produto {
    const produto = new Produto();

    produto.cst = Cst.cst00;
    produto.csosn = Csosn.csosn102;
    produto.desconto = 0;
    produto.documento = Documento.NFe;
    produto.frete = 0;
    produto.isServico = false;
    produto.outrasDespesas = 0;
    produto.percentualCofins = 15;
    produto.percentualFcp = 1;
    produto.percentualIcms = 18;
    produto.percentualPis = 5;
    produto.percentualReducao = 0;
    produto.quantidadeProduto = 9;
    produto.seguro = 0;
    produto.valorProduto = 23;
    produto.percentualDifalInterestadual = 12;
    produto.percentualDifalInterna = 18;

    produto.percentualCbs = 0.9;
    produto.percentualIbsUf = 0.1;

    return produto;
  }

  test('testa calculo cst 00 interestadual', () => {
    const produto = criaObjetoProduto();

    const utils = new Utils();

    const tributacao = new ResultadoTributacao(
      produto,
      Crt.regimeNormal,
      TipoOperacao.operacaoInterna,
      TipoPessoa.juridica
    );

    const result = tributacao.calcular();
    expect(utils.round(result.fcp)).toBe(2.07);
    expect(utils.round(result.valorIcms)).toBe(37.26);

    expect(result.valorCbs).toBe(1.51);
    expect(result.valorIbsUF).toBe(0.17);
  });
});
