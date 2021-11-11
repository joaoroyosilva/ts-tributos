import { Crt } from '../../Flags/Crt';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { TipoOperacao } from '../../Flags/TipoOperacao';
import { TipoPessoa } from '../../Flags/TipoPessoa';
import { ITributavelProduto } from '../ITributavelProduto';
export declare class ResultadoTributacao {
    private produto;
    private crtEmpresa;
    private tipoOperacao;
    private tipoPessoa;
    private tipoDesconto;
    private icms;
    private csosnBase;
    private pis;
    private cofins;
    private ipi;
    private difal;
    private tributacaoFcp;
    private issqn;
    private ibpt;
    percentualReducao: number;
    percentualIcms: number;
    percentualCredito: number;
    percentualReducaoSt: number;
    percentualMva: number;
    percentualIcmsSt: number;
    percentualReducaoIcmsBc: number;
    percentualBcStRetido: number;
    percentualDiferimento: number;
    valorIcmsDiferido: number;
    valorIcmsOperacao: number;
    valorBcIcms: number;
    valorIcms: number;
    valorBcIcmsSt: number;
    valorIcmsSt: number;
    valorCredito: number;
    valorBcStRetido: number;
    valorIcmsDesonerado: number;
    valorBcCofins: number;
    valorCofins: number;
    valorBcPis: number;
    valorPis: number;
    valorBcIpi: number;
    valorIpi: number;
    valorBcDifal: number;
    valorBcFcp: number;
    fcp: number;
    valorDifal: number;
    valorIcmsOrigem: number;
    valorIcmsDestino: number;
    valorIss: number;
    baseCalculoIss: number;
    percentualIss: number;
    baseCalculoInss: number;
    baseCalculoIrrf: number;
    valorRetCofins: number;
    valorRetPis: number;
    valorRetIrrf: number;
    valorRetInss: number;
    valorRetCsll: number;
    valorTributacaoFederal: number;
    valorTributacaoFederalImportados: number;
    valorTributacaoEstadual: number;
    valorTributacaoMunicipal: number;
    valorTotalTributos: number;
    constructor(produto: ITributavelProduto, crtEmpresa: Crt, tipoOperacao: TipoOperacao, tipoPessoa: TipoPessoa, tipoDesconto?: TipoDesconto);
    calcular(): ResultadoTributacao;
    private calcularIcms;
    private calcularIpi;
    private calcularPis;
    private calcularCofins;
    private calcularIssqn;
    private calcularFcp;
    private calcularDifal;
    private calculaIbpt;
    private cstGeraDifal;
}
