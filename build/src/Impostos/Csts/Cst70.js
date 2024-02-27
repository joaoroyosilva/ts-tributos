import { TipoCalculoIcmsDesonerado } from '../../Flags/TipoCalculoIcmsDesonerado';
import { Cst } from '../../Flags/Cst';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CstBase } from './Base/CstBase';
import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
export class Cst70 extends CstBase {
    constructor(origemMercadoria = OrigemMercadoria.nacional, tipoDesconto = TipoDesconto.incondicional, tipoCalculoIcmsDesonerado = TipoCalculoIcmsDesonerado.BasePorDentro) {
        super(origemMercadoria, tipoDesconto);
        this.origemMercadoria = origemMercadoria;
        this.tipoDesconto = tipoDesconto;
        this.tipoCalculoIcmsDesonerado = tipoCalculoIcmsDesonerado;
        this.cst = Cst.cst70;
    }
    calcula(tributavel) {
        super.calcula(tributavel);
        this.percentualReducao = tributavel.percentualReducao;
        this.valorIcmsDesonerado = new FacadeCalculadoraTributacao(tributavel, this.tipoDesconto, this.tipoCalculoIcmsDesonerado).calculaIcmsDesonerado().valor;
    }
}
//# sourceMappingURL=Cst70.js.map