import { TipoCalculoIcmsDesonerado } from '../../Flags/TipoCalculoIcmsDesonerado';
import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { Cst } from '../../Flags/Cst';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CstBase } from './Base/CstBase';
export class Cst30 extends CstBase {
    constructor(origemMercadoria = OrigemMercadoria.nacional, tipoDesconto = TipoDesconto.incondicional, tipoCalculoIcmsDesonerado = TipoCalculoIcmsDesonerado.BasePorDentro) {
        super(origemMercadoria, tipoDesconto);
        this.origemMercadoria = origemMercadoria;
        this.tipoDesconto = tipoDesconto;
        this.tipoCalculoIcmsDesonerado = tipoCalculoIcmsDesonerado;
        this.cst = Cst.cst30;
    }
    calcula(tributavel) {
        this.percentualMva = tributavel.percentualMva;
        this.percentualReducaoSt = tributavel.percentualReducaoSt;
        this.percentualIcmsSt = tributavel.percentualIcmsSt;
        this.percentualFcpSt = tributavel.percentualFcpSt;
        const facadeCalculadoraTributacao = new FacadeCalculadoraTributacao(tributavel, this.tipoDesconto);
        tributavel.valorIpi = facadeCalculadoraTributacao.calculaIpi().valor;
        const resultadoCalculoIcmsSt = facadeCalculadoraTributacao.calculaIcmsSt();
        this.valorBcIcmsSt = resultadoCalculoIcmsSt.baseCalculoIcmsSt;
        this.valorIcmsSt = resultadoCalculoIcmsSt.valorIcmsSt;
        const resultadoCalculoFcfpSt = facadeCalculadoraTributacao.calculaFcpSt();
        this.valorBcFcpSt = resultadoCalculoFcfpSt.baseCalculoFcpSt;
        this.valorFcpSt = resultadoCalculoFcfpSt.valorFcpSt;
        this.valorIcmsDesonerado = new FacadeCalculadoraTributacao(tributavel, this.tipoDesconto, this.tipoCalculoIcmsDesonerado).calculaIcmsDesonerado().valor;
    }
}
//# sourceMappingURL=Cst30.js.map