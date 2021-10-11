import { IDadosMensagemDifal } from '../IDadosMensagemDifal';
import { IResultadoCalculoDifal } from '../IResultadoCalculoDifal';
export declare class ResultadoCalculoDifal implements IResultadoCalculoDifal {
    baseCalculo: number;
    difal: number;
    fcp: number;
    valorIcmsDestino: number;
    valorIcmsOrigem: number;
    constructor(baseCalculo: number, difal: number, fcp: number, valorIcmsDestino: number, valorIcmsOrigem: number);
    getObservacao(dadosMensagemDifal: IDadosMensagemDifal): string;
    static getObservacaoDifal(dadosMensagemDifal: IDadosMensagemDifal): string;
    private static montaMensageDifal;
}
