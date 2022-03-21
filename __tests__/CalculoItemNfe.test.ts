import { Produto } from '../src/Entidade/produto';
import { Crt } from '../src/Flags/Crt';
import { Csosn } from '../src/Flags/Csosn';
import { Cst } from '../src/Flags/Cst';
import { CstIpi } from '../src/Flags/CstIpi';
import { CstPisCofins } from '../src/Flags/CstPisCofins';
import { TipoOperacao } from '../src/Flags/TipoOperacao';
import { TipoPessoa } from '../src/Flags/TipoPessoa';
import { ResultadoTributacao } from '../src/Impostos/Implementacoes/ResultadoTributacao';
import { Utils } from '../src/utils/Utils';

describe('Testa calculo de item nfe', () => {
  test('calcular item com icms, ipi, pis e cofins', () => {
    let produto = new Produto();

    produto.valorProduto = 1000;
    produto.quantidadeProduto = 1.0;
    produto.isServico = false;

    produto.cst = Cst.cst00;
    produto.percentualIcms = 17.0;

    produto.cstPisCofins = CstPisCofins.cst01;
    produto.percentualCofins = 3.0;
    produto.percentualPis = 1.65;

    produto.cstIpi = CstIpi.cst50;
    produto.percentualIpi = 5.0;

    const utils = new Utils();
    const calculo = new ResultadoTributacao(
      produto,
      Crt.regimeNormal,
      TipoOperacao.operacaoInterna,
      TipoPessoa.fisica
    );

    const resultado = calculo.calcular();

    expect(utils.round(resultado.valorBcIcms)).toBe(1000);
    expect(utils.round(resultado.valorIcms)).toBe(170);
    expect(utils.round(resultado.valorIpi)).toBe(50);
    expect(utils.round(resultado.valorCofins)).toBe(30);
    expect(utils.round(resultado.valorPis)).toBe(16.5);
  });

  test('calcular item com icms ibpt', () => {
    let produto = new Produto();

    produto.valorProduto = 1000;
    produto.quantidadeProduto = 1.0;
    produto.isServico = false;

    produto.csosn = Csosn.csosn102;
    produto.percentualIcms = 17.0;

    produto.percentualFederal = 10;
    produto.percentualFederalImportados = 20;
    produto.percentualEstadual = 15;
    produto.percentualMunicipal = 0;

    const utils = new Utils();
    const calculo = new ResultadoTributacao(
      produto,
      Crt.simplesNacional,
      TipoOperacao.operacaoInterna,
      TipoPessoa.fisica
    );

    const resultado = calculo.calcular();

    expect(utils.round(resultado.valorTributacaoFederal)).toBe(100);
    expect(utils.round(resultado.valorTributacaoFederalImportados)).toBe(200);
    expect(utils.round(resultado.valorTributacaoEstadual)).toBe(150);
    expect(utils.round(resultado.valorTributacaoMunicipal)).toBe(0);
  });

  test('calcular item com icms, ipi, pis, e difal', () => {
    let produto = new Produto();

    produto.valorProduto = 1000;
    produto.quantidadeProduto = 1.0;
    produto.isServico = false;
    produto.icmsSobreIpi = false;

    produto.cst = Cst.cst00;
    produto.percentualIcms = 17.0;

    produto.cstPisCofins = CstPisCofins.cst01;
    produto.percentualCofins = 3.0;
    produto.percentualPis = 1.65;

    produto.cstIpi = CstIpi.cst50;
    produto.percentualIpi = 5.0;

    produto.percentualFcp = 2;
    produto.percentualDifalInterna = 18;
    produto.percentualDifalInterestadual = 12;

    const utils = new Utils();
    const calculo = new ResultadoTributacao(
      produto,
      Crt.regimeNormal,
      TipoOperacao.operacaoInterestadual,
      TipoPessoa.fisica
    );

    const resultado = calculo.calcular();

    expect(utils.round(resultado.valorBcIcms)).toBe(1000);
    expect(utils.round(resultado.valorIcms)).toBe(170);
    expect(utils.round(resultado.valorIpi)).toBe(50);
    expect(utils.round(resultado.valorCofins)).toBe(30);
    expect(utils.round(resultado.valorPis)).toBe(16.5);
    expect(utils.round(resultado.fcp)).toBe(20);
    expect(utils.round(resultado.valorIcmsDestino)).toBe(60);
    expect(utils.round(resultado.valorIcmsOrigem)).toBe(0);
    expect(utils.round(resultado.valorDifal)).toBe(60);
  });

  test('calcular item com icms com ipi, pis, e difal', () => {
    let produto = new Produto();

    produto.valorProduto = 1000;
    produto.quantidadeProduto = 1.0;
    produto.isServico = false;
    produto.icmsSobreIpi = true;

    produto.cst = Cst.cst00;
    produto.percentualIcms = 17.0;

    produto.cstPisCofins = CstPisCofins.cst01;
    produto.percentualCofins = 3.0;
    produto.percentualPis = 1.65;

    produto.cstIpi = CstIpi.cst50;
    produto.percentualIpi = 5.0;

    produto.percentualFcp = 2;
    produto.percentualDifalInterna = 18;
    produto.percentualDifalInterestadual = 12;

    const utils = new Utils();
    const calculo = new ResultadoTributacao(
      produto,
      Crt.regimeNormal,
      TipoOperacao.operacaoInterestadual,
      TipoPessoa.fisica
    );

    const resultado = calculo.calcular();

    expect(utils.round(resultado.valorBcIcms)).toBe(1050);
    expect(utils.round(resultado.valorIcms)).toBe(178.5);
    expect(utils.round(resultado.valorIpi)).toBe(50);
    expect(utils.round(resultado.valorCofins)).toBe(31.5);
    expect(utils.round(resultado.valorPis)).toBe(17.33);
    expect(utils.round(resultado.fcp)).toBe(21);
    expect(utils.round(resultado.valorIcmsDestino)).toBe(63);
    expect(utils.round(resultado.valorIcmsOrigem)).toBe(0);
    expect(utils.round(resultado.valorDifal)).toBe(63);
  });

  test('calcular item servico', () => {
    let produto = new Produto();

    produto.valorProduto = 1000;
    produto.quantidadeProduto = 1.0;
    produto.isServico = true;
    produto.percentualIssqn = 5;

    produto.cstPisCofins = CstPisCofins.cst01;
    produto.percentualCofins = 3.0;
    produto.percentualPis = 1.65;

    const utils = new Utils();
    const calculo = new ResultadoTributacao(
      produto,
      Crt.simplesNacional,
      TipoOperacao.operacaoInterna,
      TipoPessoa.fisica
    );

    const resultado = calculo.calcular();

    expect(utils.round(resultado.valorCofins)).toBe(30);
    expect(utils.round(resultado.valorPis)).toBe(16.5);
    expect(utils.round(resultado.valorIss)).toBe(50);
  });

  test('calcular item servico com retencao', () => {
    let produto = new Produto();

    produto.valorProduto = 1000;
    produto.quantidadeProduto = 1.0;
    produto.isServico = true;
    produto.percentualIssqn = 5;

    produto.cstPisCofins = CstPisCofins.cst01;
    produto.percentualCofins = 3.0;
    produto.percentualPis = 1.65;

    produto.percentualRetIrrf = 1.65;
    produto.percentualRetCsll = 1.0;
    produto.percentualRetCofins = 3.0;
    produto.percentualRetPis = 0.65;
    produto.percentualRetInss = 11.0;

    const utils = new Utils();
    const calculo = new ResultadoTributacao(
      produto,
      Crt.regimeNormal,
      TipoOperacao.operacaoInterna,
      TipoPessoa.juridica
    );

    const resultado = calculo.calcular();

    expect(utils.round(resultado.valorCofins)).toBe(30);
    expect(utils.round(resultado.valorPis)).toBe(16.5);
    expect(utils.round(resultado.valorRetIrrf)).toBe(16.5);
    expect(utils.round(resultado.valorRetCofins)).toBe(30);
    expect(utils.round(resultado.valorRetPis)).toBe(6.5);
    expect(utils.round(resultado.valorRetInss)).toBe(110);
    expect(utils.round(resultado.valorRetCsll)).toBe(10);
  });
});
