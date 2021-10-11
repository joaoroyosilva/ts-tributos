import { IResultadoCalculoIcmsSt } from '../IResultadoCalculoIcmsSt';
export declare class ResultadoCalculoIcmsSt implements IResultadoCalculoIcmsSt {
    baseCalculoOperacaoPropria: number;
    valorIcmsProprio: number;
    baseCalculoIcmsSt: number;
    valorIcmsSt: number;
    constructor(baseCalculoOperacaoPropria: number, valorIcmsProprio: number, baseCalculoIcmsSt: number, valorIcmsSt: number);
}
