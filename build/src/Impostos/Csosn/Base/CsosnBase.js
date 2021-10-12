import { ArgumentException } from '../../../Exceptions/ArgumentException';
import { OrigemMercadoria } from '../../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../../Flags/TipoDesconto';
export class CsosnBase {
    constructor(origemMercadoria = OrigemMercadoria.nacional, tipoDesconto = TipoDesconto.incondicional) {
        this.origemMercadoria = origemMercadoria;
        this.tipoDesconto = tipoDesconto;
    }
    calcula(tributavel) {
        throw new ArgumentException();
    }
}
//# sourceMappingURL=CsosnBase.js.map