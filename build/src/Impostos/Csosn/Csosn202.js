import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { Csosn } from '../../Flags/Csosn';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { Csosn102 } from './Csosn102';
export class Csosn202 extends Csosn102 {
    constructor(origemMercadoria = OrigemMercadoria.nacional, tipoDesconto = TipoDesconto.incondicional) {
        super(origemMercadoria, tipoDesconto);
        this.csosn = Csosn.csosn202;
    }
    calcula(tributavel) {
        this.percentualMvaSt = tributavel.percentualMva;
        this.percentualReducaoSt = tributavel.percentualReducaoSt;
        this.percentualIcmsSt = tributavel.percentualIcmsSt;
        const facade = new FacadeCalculadoraTributacao(tributavel, this.tipoDesconto);
        tributavel.valorIpi = facade.calculaIpi().valor;
        const resultadoCalculoIcmsSt = facade.calculaIcmsSt();
        this.valorBcIcmsSt = resultadoCalculoIcmsSt.baseCalculoIcmsSt;
        this.valorIcmsSt = resultadoCalculoIcmsSt.valorIcmsSt;
    }
}
//# sourceMappingURL=Csosn202.js.map