import { IResultadoCalculoIbpt } from '../IResultadoCalculoIbpt';
export declare class ResultadoCalculoIbpt implements IResultadoCalculoIbpt {
    impostoAproximadoFederal: number;
    impostoAproximadoMunipio: number;
    impostoAproximadoEstadual: number;
    impostoAproximadoImportados: number;
    baseCalculo: number;
    tributacaoFederal: number;
    tributacaoFederalImportados: number;
    tributacaoEstadual: number;
    tributacaoMunicipal: number;
    valorTotalTributos: number;
    constructor(impostoAproximadoFederal: number, impostoAproximadoMunipio: number, impostoAproximadoEstadual: number, impostoAproximadoImportados: number, baseCalculo: number);
}
