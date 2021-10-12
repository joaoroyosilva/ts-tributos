import { IDadosMensagemDifal } from './IDadosMensagemDifal';
export interface IResultadoCalculoDifal {
    baseCalculo: number;
    fcp: number;
    valorIcmsDestino: number;
    valorIcmsOrigem: number;
    difal: number;
    getObservacao(dadosMensagemDifal: IDadosMensagemDifal): string;
}
