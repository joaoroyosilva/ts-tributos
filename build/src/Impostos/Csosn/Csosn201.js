import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { Csosn } from '../../Flags/Csosn';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { Csosn101 } from './Csosn101';
export class Csosn201 extends Csosn101 {
    constructor(origemMercadoria = OrigemMercadoria.nacional, tipoDesconto = TipoDesconto.incondicional) {
        super(origemMercadoria, tipoDesconto);
        this.origemMercadoria = origemMercadoria;
        this.tipoDesconto = tipoDesconto;
        this.csosn = Csosn.csosn201;
    }
    calcula(tributavel) {
        super.calcula(tributavel);
        this.percentualMva = tributavel.percentualMva;
        this.percentualReducaoSt = tributavel.percentualReducaoSt;
        this.percentualIcmsSt = tributavel.percentualIcmsSt;
        const facade = new FacadeCalculadoraTributacao(tributavel, this.tipoDesconto);
        tributavel.valorIpi = facade.calculaIpi().valor;
        const resultadoCalculoIcmsSt = facade.calculaIcmsSt();
        this.valorBcIcmsSt = resultadoCalculoIcmsSt.baseCalculoIcmsSt;
        this.valorIcmsSt = resultadoCalculoIcmsSt.valorIcmsSt;
    }
}
//# sourceMappingURL=Csosn201.js.map