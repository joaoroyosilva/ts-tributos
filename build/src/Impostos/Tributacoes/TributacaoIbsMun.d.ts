import { CalculaBaseCalculoCbsIbs } from '../CalculosDeBc/CalculaBaseCalculoCbsIbs';
import { ResultadoCalculoCbsIbs } from '../Implementacoes/ResultadoCalculoCbsIbs';
import { ResultadoTributacao } from '../Implementacoes/ResultadoTributacao';
import { ITributavel } from '../ITributavel';
export declare class TributacaoIbsMun {
    private tributavel;
    private resultadoTributacao;
    calculaBaseCalculo: CalculaBaseCalculoCbsIbs;
    constructor(tributavel: ITributavel, resultadoTributacao: ResultadoTributacao);
    calcula(): ResultadoCalculoCbsIbs;
    private calculaCbsIbs;
    private calculaValorIbsMun;
    private calculaValorDiferido;
    private calculaValorCreditoPresumido;
    private calculaAliquotaEfetiva;
    private calculaValorEfetivo;
}
