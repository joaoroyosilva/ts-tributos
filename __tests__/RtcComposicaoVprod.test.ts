import { Produto } from '../src/Entidade/produto';
import { Crt } from '../src/Flags/Crt';
import { Cst } from '../src/Flags/Cst';
import { CstIpi } from '../src/Flags/CstIpi';
import { TipoOperacao } from '../src/Flags/TipoOperacao';
import { TipoPessoa } from '../src/Flags/TipoPessoa';
import { ResultadoTributacao } from '../src/Impostos/Implementacoes/ResultadoTributacao';
import { Utils } from '../src/utils/Utils';

// Mesmo motivo do teste da tributação regular: sem resolveJsonModule nem @types/node.
declare const require: (caminho: string) => any;

interface Vetor {
  id: string;
  descricao: string;
  entrada: { [campo: string]: any };
  esperado: { [campo: string]: number };
}

const vetores: Vetor[] = require('./fixtures/rtc-composicao-vprod-vectors.json').vetores;

const CAMPOS_UNITARIOS = ['valorUnitarioBruto', 'valorUnitarioLiquido'];

function produto(entrada: { [campo: string]: any }): Produto {
  const p = new Produto();
  p.cst = entrada.cst ?? null;
  p.csosn = entrada.csosn ?? null;
  p.cstPisCofins = entrada.cstPisCofins ?? 7;
  p.cstIpi = CstIpi.cst53;
  p.deduzIcmsPisCofins = entrada.deduzIcmsPisCofins ?? false;
  p.valorProduto = entrada.valorProduto ?? 0;
  p.quantidadeProduto = entrada.quantidadeProduto ?? 1;
  p.frete = entrada.frete ?? 0;
  p.seguro = entrada.seguro ?? 0;
  p.outrasDespesas = entrada.outrasDespesas ?? 0;
  p.desconto = entrada.desconto ?? 0;
  p.percentualIcms = entrada.percentualIcms ?? 0;
  p.percentualReducao = entrada.percentualReducao ?? 0;
  p.percentualFcp = entrada.percentualFcp ?? 0;
  p.percentualDiferimento = entrada.percentualDiferimento ?? 0;
  p.percentualMva = entrada.percentualMva ?? 0;
  p.percentualIcmsSt = entrada.percentualIcmsSt ?? 0;
  p.percentualReducaoSt = entrada.percentualReducaoSt ?? 0;
  p.percentualCredito = entrada.percentualCredito ?? 0;
  p.percentualDifalInterna = entrada.percentualDifalInterna ?? 0;
  p.percentualDifalInterestadual = entrada.percentualDifalInterestadual ?? 0;
  p.percentualPis = entrada.percentualPis ?? 0;
  p.percentualCofins = entrada.percentualCofins ?? 0;
  p.percentualCbs = entrada.percentualCbs ?? 0;
  p.reducaoCbs = entrada.reducaoCbs ?? 0;
  p.percentualDiferimentoCbs = entrada.percentualDiferimentoCbs ?? 0;
  p.percentualIbsUf = entrada.percentualIbsUf ?? 0;
  p.reducaoIbsUf = entrada.reducaoIbsUf ?? 0;
  p.percentualDiferimentoIbsUf = entrada.percentualDiferimentoIbsUf ?? 0;
  p.percentualIbsMun = entrada.percentualIbsMun ?? 0;
  p.reducaoIbsMun = entrada.reducaoIbsMun ?? 0;
  p.percentualDiferimentoIbsMun = entrada.percentualDiferimentoIbsMun ?? 0;
  p.rtcCompoeValorProduto = entrada.rtcCompoeValorProduto ?? false;
  p.rtcNaBaseIcms = entrada.rtcNaBaseIcms ?? false;
  return p;
}

function calcular(entrada: { [campo: string]: any }): ResultadoTributacao {
  return new ResultadoTributacao(
    produto(entrada),
    entrada.crt ?? Crt.regimeNormal,
    entrada.tipoOperacao ?? TipoOperacao.operacaoInterna,
    entrada.tipoPessoa === 'Juridica' ? TipoPessoa.juridica : TipoPessoa.fisica
  ).calcular();
}

/**
 * Composição do `vProd` com IBS/CBS a partir de 2027 (NT 2026.008) e IBS/CBS na base do ICMS
 * (opção do lojista). Vetores IDÊNTICOS aos da `php-tributos` (arquivo byte a byte); é esse par
 * de suítes que sustenta a paridade. Ao mexer nos vetores, mexer nos dois repos.
 */
describe('Composicao do vProd com IBS/CBS — vetores canonicos', () => {
  const utils = new Utils();

  vetores.forEach((vetor) => {
    it(`${vetor.id}: ${vetor.descricao}`, () => {
      const resultado = calcular(vetor.entrada) as any;

      Object.keys(vetor.esperado).forEach((campo) => {
        const casas = CAMPOS_UNITARIOS.indexOf(campo) >= 0 ? 10 : 2;
        expect({ campo, valor: utils.roundHalfUp(resultado[campo], casas) }).toEqual({
          campo,
          valor: vetor.esperado[campo],
        });
      });
    });
  });
});

describe('Composicao do vProd com IBS/CBS — bordas', () => {
  it('recalcular nao acumula o credito presumido do IBS', () => {
    const p = produto({
      cst: Cst.cst00,
      valorProduto: 1000,
      percentualIcms: 18,
      percentualCbs: 8.7,
      percentualIbsUf: 0.05,
      percentualIbsMun: 0.05,
      rtcCompoeValorProduto: true,
      rtcNaBaseIcms: true,
    });
    p.percentualCreditoPresumidoIbs = 50;

    const resultado = new ResultadoTributacao(
      p,
      Crt.regimeNormal,
      TipoOperacao.operacaoInterna,
      TipoPessoa.fisica
    );
    resultado.calcular();
    const primeiro = resultado.valorCredutoPresumidoIbs;
    resultado.calcular();

    expect(primeiro).toBeGreaterThan(0);
    expect(resultado.valorCredutoPresumidoIbs).toBe(primeiro);
  });

  it('valor de RTC deixado no item nao entra na base com as entradas desligadas', () => {
    const p = produto({ cst: Cst.cst00, valorProduto: 100, percentualIcms: 18, percentualCbs: 8.7 });
    p.valorRtcBaseIcms = 50;

    const resultado = new ResultadoTributacao(
      p,
      Crt.regimeNormal,
      TipoOperacao.operacaoInterna,
      TipoPessoa.fisica
    ).calcular();

    expect(resultado.valorBcIcms).toBe(100);
    expect(resultado.valorIcms).toBe(18);
  });

  it('servico compoe o valor do item sem laco de ICMS', () => {
    const p = produto({
      valorProduto: 200,
      percentualCbs: 8.7,
      rtcCompoeValorProduto: true,
      rtcNaBaseIcms: true,
    });
    p.isServico = true;

    const resultado = new ResultadoTributacao(
      p,
      Crt.regimeNormal,
      TipoOperacao.operacaoInterna,
      TipoPessoa.fisica
    ).calcular();

    expect(resultado.valorBcIcms).toBe(0);
    expect(resultado.valorEfetivoCbs).toBe(17.4);
    expect(resultado.valorProdutoBruto).toBe(217.4);
    expect(p.valorRtcBaseIcms).toBe(0);
  });
});
