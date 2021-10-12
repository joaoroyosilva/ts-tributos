import { IResultadoCalculoIssqn } from '../IResultadoCalculoIssqn';
export declare class ResultadoCalculoIssqn implements IResultadoCalculoIssqn {
    baseCalculo: number;
    valor: number;
    baseCalculoInss: number;
    baseCalculoIrrf: number;
    valorRetPis: number;
    valorRetCofins: number;
    valorRetCsll: number;
    valorRetIrrf: number;
    valorRetInss: number;
    constructor(baseCalculo: number, valor: number, baseCalculoInss?: number, baseCalculoIrrf?: number, valorRetPis?: number, valorRetCofins?: number, valorRetCsll?: number, valorRetIrrf?: number, valorRetInss?: number);
}
