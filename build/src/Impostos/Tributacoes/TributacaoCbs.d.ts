import { CalculaBaseCalculoCbsIbs } from "../CalculosDeBc/CalculaBaseCalculoCbsIbs";
import { ResultadoCalculoCbsIbs } from "../Implementacoes/ResultadoCalculoCbsIbs";
import { ResultadoTributacao } from "../Implementacoes/ResultadoTributacao";
import { ITributavel } from "../ITributavel";
export declare class TributacaoCbs {
    private tributavel;
    private resultadoTributacao;
    calculaBaseCalculo: CalculaBaseCalculoCbsIbs;
    constructor(tributavel: ITributavel, resultadoTributacao: ResultadoTributacao);
    calcula(): ResultadoCalculoCbsIbs;
    private calculaCbsIbs;
    private calculaValorCbs;
    private calculaValorDiferido;
    private calculaAliquotaEfetiva;
    private calculaValorEfetivo;
}
