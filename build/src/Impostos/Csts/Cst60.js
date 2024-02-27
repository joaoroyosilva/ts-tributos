import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { Cst } from '../../Flags/Cst';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CstBase } from './Base/CstBase';
export class Cst60 extends CstBase {
    constructor(origemMercadoria = OrigemMercadoria.nacional, tipoDesconto = TipoDesconto.incondicional) {
        super(origemMercadoria, tipoDesconto);
        this.cst = Cst.cst60;
    }
    calcula(tributavel) {
        this.percentualIcmsEfetivo =
            tributavel.percentualIcmsSt + tributavel.percentualFcpSt;
        const facadeCalculadoraTributacao = new FacadeCalculadoraTributacao(tributavel, this.tipoDesconto);
        const resultadoCalculoIcms = facadeCalculadoraTributacao.calculaIcmsSt();
        this.percentualBcStRetido = tributavel.percentualReducaoSt;
        this.valorBcStRetido = resultadoCalculoIcms.baseCalculoIcmsSt;
        this.valorIcmsStRetido = resultadoCalculoIcms.valorIcmsSt;
        this.valorCreditoOutorgadoOuPresumido =
            facadeCalculadoraTributacao.calculaIcmsCredito().valor;
        this.percentualSt =
            tributavel.percentualIcmsSt + tributavel.percentualFcpSt;
        this.baseCalculoIcmsEfetivo =
            facadeCalculadoraTributacao.calculaIcmsEfetivo().baseCalculo;
        this.valorIcmsEfetivo =
            facadeCalculadoraTributacao.calculaIcmsEfetivo().valor;
    }
}
//# sourceMappingURL=Cst60.js.map