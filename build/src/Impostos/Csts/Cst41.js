import { Cst } from '../../Flags/Cst';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CstBase } from './Base/CstBase';
export class Cst41 extends CstBase {
    constructor(origemMercadoria = OrigemMercadoria.nacional, tipoDesconto = TipoDesconto.incondicional) {
        super(origemMercadoria, tipoDesconto);
        this.cst = Cst.cst41;
    }
}
//# sourceMappingURL=Cst41.js.map