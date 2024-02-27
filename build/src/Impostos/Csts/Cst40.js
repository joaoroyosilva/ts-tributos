import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { Cst } from '../../Flags/Cst';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CstBase } from './Base/CstBase';
import { TipoCalculoIcmsDesonerado } from '../../Flags/TipoCalculoIcmsDesonerado';
export class Cst40 extends CstBase {
    constructor(origemMercadoria = OrigemMercadoria.nacional, tipoDesconto = TipoDesconto.incondicional, tipoCalculoIcmsDesonerado = TipoCalculoIcmsDesonerado.BasePorDentro) {
        super(origemMercadoria, tipoDesconto);
        this.origemMercadoria = origemMercadoria;
        this.tipoDesconto = tipoDesconto;
        this.tipoCalculoIcmsDesonerado = tipoCalculoIcmsDesonerado;
        this.cst = Cst.cst40;
    }
    calcula(tributavel) {
        let facadeCalculadora = new FacadeCalculadoraTributacao(tributavel, this.tipoDesconto, this.tipoCalculoIcmsDesonerado);
        this.valorIcmsDesonerado = facadeCalculadora.calculaIcmsDesonerado().valor;
    }
}
//# sourceMappingURL=Cst40.js.map