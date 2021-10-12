import { Csosn } from '../../Flags/Csosn';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CsosnBase } from './Base/CsosnBase';
export class Csosn103 extends CsosnBase {
    constructor(origemMercadoria = OrigemMercadoria.nacional, tipoDesconto = TipoDesconto.incondicional) {
        super(origemMercadoria, tipoDesconto);
        this.csosn = Csosn.csosn103;
    }
}
//# sourceMappingURL=Csosn103.js.map