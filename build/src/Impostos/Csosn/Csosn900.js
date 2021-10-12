import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { CsosnBase } from './Base/CsosnBase';
export class Csosn900 extends CsosnBase {
    calcula(tributavel) {
        this.calculaIcms(tributavel);
        this.calculaIcmsSt(tributavel);
        this.calculaCredito(tributavel);
    }
    calculaCredito(tributavel) {
        this.percentualCredito = tributavel.percentualCredito;
        const facade = new FacadeCalculadoraTributacao(tributavel, this.tipoDesconto);
        const resultadoCalculoCredito = facade.calculaIcmsCredito();
        this.valorCredito = resultadoCalculoCredito.valor;
    }
    calculaIcmsSt(tributavel) {
        this.percentualMva = tributavel.percentualMva;
        this.percentualReducaoIcmsStBc = tributavel.percentualReducaoSt;
        this.percentualIcmsSt = tributavel.percentualIcmsSt;
        const facade = new FacadeCalculadoraTributacao(tributavel, this.tipoDesconto);
        tributavel.valorIpi = facade.calculaIpi().valor;
        const resultadoCalculoIcmsSt = facade.calculaIcmsSt();
        this.valorBcIcmsSt = resultadoCalculoIcmsSt.baseCalculoIcmsSt;
        this.valorIcmsSt = resultadoCalculoIcmsSt.valorIcmsSt;
    }
    calculaIcms(tributavel) {
        this.percentualReducaoIcmsBc = tributavel.percentualReducao;
        this.percentualIcms = tributavel.percentualIcms;
        const facade = new FacadeCalculadoraTributacao(tributavel, this.tipoDesconto);
        tributavel.valorIpi = facade.calculaIpi().valor;
        const resultadoCalculoIcms = facade.calculaIcms();
        this.valorBcIcms = resultadoCalculoIcms.baseCalculo;
        this.valorIcms = resultadoCalculoIcms.valor;
    }
}
//# sourceMappingURL=Csosn900.js.map