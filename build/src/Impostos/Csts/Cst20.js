import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { Cst } from '../../Flags/Cst';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { Cst00 } from './Cst00';
export class Cst20 extends Cst00 {
    constructor(origemMercadoria = OrigemMercadoria.nacional, tipoDesconto = TipoDesconto.incondicional) {
        super(origemMercadoria, tipoDesconto);
        this.origemMercadoria = origemMercadoria;
        this.tipoDesconto = tipoDesconto;
        this.cst = Cst.cst20;
    }
    calcula(tributavel) {
        super.calcula(tributavel);
        this.percentualReducao = tributavel.percentualReducao;
        this.valorBcFcp = new FacadeCalculadoraTributacao(tributavel, this.tipoDesconto).calculaFcp().baseCalculo;
    }
}
//# sourceMappingURL=Cst20.js.map