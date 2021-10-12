import { ModalidadeDeterminacaoBcIcmsSt } from '../../Flags/ModalidadeDeterminacaoBcIcmsSt';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { Csosn101 } from './Csosn101';
export declare class Csosn201 extends Csosn101 {
    origemMercadoria: OrigemMercadoria;
    tipoDesconto: TipoDesconto;
    modalidadeDeterminacaoBcIcmsSt: ModalidadeDeterminacaoBcIcmsSt;
    percentualMva: number;
    percentualReducaoSt: number;
    valorBcIcmsSt: number;
    percentualIcmsSt: number;
    valorIcmsSt: number;
    constructor(origemMercadoria?: OrigemMercadoria, tipoDesconto?: TipoDesconto);
    calcula(tributavel: ITributavel): void;
}
