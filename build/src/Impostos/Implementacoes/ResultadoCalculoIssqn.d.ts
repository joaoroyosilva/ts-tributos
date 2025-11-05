import { IResultadoCalculoIssqn } from '../IResultadoCalculoIssqn';
export declare class ResultadoCalculoIssqn implements IResultadoCalculoIssqn {
    baseCalculoIss: number;
    valor: number;
    baseCalculoInss: number;
    baseCalculoIrrf: number;
    valorRetPis: number;
    valorRetCofins: number;
    valorRetCsll: number;
    valorRetInss: number;
    valorRetIrrf: number;
    constructor(baseCalculoIss: number, valor: number, baseCalculoInss?: number, baseCalculoIrrf?: number, valorRetPis?: number, valorRetCofins?: number, valorRetCsll?: number, valorRetInss?: number, valorRetIrrf?: number);
}
