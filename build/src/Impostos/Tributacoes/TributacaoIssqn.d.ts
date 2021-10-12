import { TipoDesconto } from '../../Flags/TipoDesconto';
import { IResultadoCalculoIssqn } from '../IResultadoCalculoIssqn';
import { ITributavel } from '../ITributavel';
export declare class TributacaoIssqn {
    private tributavel;
    private tipoDesconto;
    private calculaBaseCalculoIssqn;
    constructor(tributavel: ITributavel, tipoDesconto: TipoDesconto);
    calcula(calcularRetencoes: boolean): IResultadoCalculoIssqn;
    private calcularIssqn;
    private calcularRetencoes;
    private calcularValorIssqn;
    private calcularRetPis;
    private calcularRetCofins;
    private calcularRetCsll;
    private calcularRetIrrf;
    private calcularValorTotalTributacao;
    private calcularRetInss;
}
