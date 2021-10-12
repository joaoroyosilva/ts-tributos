import { Csosn } from '../../Flags/Csosn';
import { ModalidadeDeterminacaoBcIcmsSt } from '../../Flags/ModalidadeDeterminacaoBcIcmsSt';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CsosnBase } from './Base/CsosnBase';
export class Csosn102 extends CsosnBase {
    constructor(origemMercadoria = OrigemMercadoria.nacional, tipoDesconto = TipoDesconto.incondicional) {
        super(origemMercadoria, tipoDesconto);
        this.csosn = Csosn.csosn102;
        this.modalidadeDeterminacaoBcIcmsSt =
            ModalidadeDeterminacaoBcIcmsSt.margemValorAgregado;
    }
}
//# sourceMappingURL=Csosn102.js.map