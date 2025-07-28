import { ResultadoTributacao } from '../Implementacoes/ResultadoTributacao';
import { ITributavel } from '../ITributavel';
import { CalculaBaseCalculoBase } from './Base/CalculaBaseCalculoBase';
export declare class CalculaBaseCalculoCbsIbs extends CalculaBaseCalculoBase {
    protected tributavel: ITributavel;
    protected resultadoTributacao: ResultadoTributacao;
    constructor(tributavel: ITributavel, resultadoTributacao: ResultadoTributacao);
    calculaBaseCalculoBase(): number;
}
