import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { Csosn } from '../../Flags/Csosn';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CsosnBase } from './Base/CsosnBase';
export class Csosn101 extends CsosnBase {
    constructor(origemMercadoria = OrigemMercadoria.nacional, tipoDesconto = TipoDesconto.incondicional) {
        super(origemMercadoria, tipoDesconto);
        this.csosn = Csosn.csosn101;
    }
    calcula(tributavel) {
        const resultadoCalculoIcmsCredito = new FacadeCalculadoraTributacao(tributavel, this.tipoDesconto).calculaIcmsCredito();
        this.percentualCredito = tributavel.percentualCredito;
        this.valorCredito = resultadoCalculoIcmsCredito.valor;
    }
}
//# sourceMappingURL=Csosn101.js.map