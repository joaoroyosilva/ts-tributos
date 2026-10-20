import { Csosn } from '../Flags/Csosn';
import { Cst } from '../Flags/Cst';
import { CstIpi } from '../Flags/CstIpi';
import { CstPisCofins } from '../Flags/CstPisCofins';
import { Documento } from '../Flags/Documento';
export interface ITributavel {
    documento: Documento;
    cst: Cst;
    csosn: Csosn;
    cstPisCofins: CstPisCofins;
    cstIpi: CstIpi;
    isServico: boolean;
    icmsSobreIpi: boolean;
    deduzIcmsPisCofins: boolean;
    valorProduto: number;
    frete: number;
    seguro: number;
    outrasDespesas: number;
    desconto: number;
    valorIpi: number;
    valorIcms: number;
    percentualReducao: number;
    percentualReducaoIcmsEfetivo: number;
    quantidadeProduto: number;
    percentualIcms: number;
    percentualIcmsEfetivo: number;
    percentualCredito: number;
    percentualDiferimento: number;
    percentualDifalInterna: number;
    percentualDifalInterestadual: number;
    percentualFcp: number;
    percentualMva: number;
    percentualIcmsSt: number;
    percentualIpi: number;
    percentualCofins: number;
    percentualPis: number;
    percentualReducaoSt: number;
    percentualIssqn: number;
    percentualRetPis: number;
    percentualRetCofins: number;
    percentualRetCsll: number;
    percentualRetIrrf: number;
    percentualRetInss: number;
    percentualFcpSt: number;
    percentualCbs: number;
    reducaoCbs: number;
    percentualDiferimentoCbs: number;
    percentualRedutorCompraGov: number;
    percentualCreditoPresumidoCbs: number;
    percentualCreditoPresumidoIbs: number;
    percentualIbsUf: number;
    reducaoIbsUf: number;
    percentualDiferimentoIbsUf: number;
    percentualIbsMun: number;
    reducaoIbsMun: number;
    percentualDiferimentoIbsMun: number;
    /**
     * Tributação regular (`gTribRegular`): o par regular descreve OUTRO `cClassTrib` — o que
     * valeria sem a condição resolutiva ou suspensiva. Por isso as alíquotas nominais vêm em
     * campos próprios: a alíquota do item é zero por definição nesses casos.
     */
    possuiTributacaoRegular: boolean;
    percentualRegularIbsUf: number;
    reducaoRegularIbsUf: number;
    percentualRegularIbsMun: number;
    reducaoRegularIbsMun: number;
    percentualRegularCbs: number;
    reducaoRegularCbs: number;
    /**
     * IBS/CBS (efetivos) compõem o valor do produto (`vProd`/`vUnCom`) — NT 2026.008, a partir de
     * 2027, exceto importação. Quem chama decide pelo ano de emissão; a lib não olha data.
     */
    rtcCompoeValorProduto: boolean;
    /**
     * IBS/CBS (efetivos) entram na base de todo o ICMS do item (próprio, FCP, ST, DIFAL, efetivo,
     * crédito do Simples). Opção do lojista; só tem efeito com `rtcCompoeValorProduto`.
     */
    rtcNaBaseIcms: boolean;
    /**
     * IBS/CBS somados à base do ICMS. Preenchido pelo próprio `ResultadoTributacao.calcular()`
     * a cada passada do laço; qualquer valor deixado por quem chama é zerado no início.
     */
    valorRtcBaseIcms: number;
}
