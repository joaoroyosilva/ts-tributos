import { ModalidadeDeterminacaoBcIcmsSt } from '../../Flags/ModalidadeDeterminacaoBcIcmsSt';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { Cst00 } from './Cst00';
export declare class Cst10 extends Cst00 {
    origemMercadoria: OrigemMercadoria;
    tipoDesconto: TipoDesconto;
    modalidadeDeterminacaoBcIcmsSt: ModalidadeDeterminacaoBcIcmsSt;
    percentualMva: number;
    percentualReducaoSt: number;
    valorBcIcmsSt: number;
    percentualIcmsSt: number;
    valorIcmsSt: number;
    valorBcFcp: number;
    valorBcFcpSt: number;
    percentualFcpSt: number;
    valorFcpSt: number;
    constructor(origemMercadoria?: OrigemMercadoria, tipoDesconto?: TipoDesconto);
    calcula(tributavel: ITributavel): void;
}
