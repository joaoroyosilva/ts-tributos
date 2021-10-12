import { ModalidadeDeterminacaoBcIcmsSt } from '../../Flags/ModalidadeDeterminacaoBcIcmsSt';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CsosnBase } from './Base/CsosnBase';
export declare class Csosn102 extends CsosnBase {
    modalidadeDeterminacaoBcIcmsSt: ModalidadeDeterminacaoBcIcmsSt;
    constructor(origemMercadoria?: OrigemMercadoria, tipoDesconto?: TipoDesconto);
}
