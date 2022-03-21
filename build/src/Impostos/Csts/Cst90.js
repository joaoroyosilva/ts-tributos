import { ArgumentException } from '../../Exceptions/ArgumentException';
import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { Cst } from '../../Flags/Cst';
import { Documento } from '../../Flags/Documento';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CstBase } from './Base/CstBase';
export class Cst90 extends CstBase {
    constructor(origemMercadoria = OrigemMercadoria.nacional, tipoDesconto = TipoDesconto.incondicional) {
        super(origemMercadoria, tipoDesconto);
        this.cst = Cst.cst90;
    }
    calcula(tributavel) {
        this.calculaIcms(tributavel);
        this.calculaIcmsSt(tributavel);
        this.calculaCredito(tributavel);
        this.calculaFcp(tributavel);
        this.calculaFcpSt(tributavel);
    }
    calculaCredito(tributavel) {
        this.percentualCredito = tributavel.percentualCredito;
        switch (tributavel.documento) {
            case Documento.MFe:
            case Documento.MDFe:
            case Documento.SAT:
            case Documento.NFCe:
            case Documento.CTeOs:
            case Documento.NFe:
                const facade = new FacadeCalculadoraTributacao(tributavel, this.tipoDesconto);
                const resultadoCalculoCredito = facade.calculaIcmsCredito();
                this.valorCredito = resultadoCalculoCredito.valor;
                break;
            case Documento.CTe:
                const resultadoIcms = new FacadeCalculadoraTributacao(tributavel, this.tipoDesconto).calculaIcms();
                this.valorCredito =
                    (resultadoIcms.valor * tributavel.percentualCredito) / 100;
                break;
            default:
                throw new ArgumentException();
                break;
        }
    }
    calculaIcmsSt(tributavel) {
        this.percentualMva = tributavel.percentualMva;
        this.percentualReducaoSt = tributavel.percentualReducaoSt;
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
    calculaFcp(tributavel) {
        this.percentualFcp = tributavel.percentualFcp;
        const facade = new FacadeCalculadoraTributacao(tributavel, this.tipoDesconto);
        const resultadoCalculoFcp = facade.calculaFcp();
        this.valorBcFcp = resultadoCalculoFcp.baseCalculo;
        this.valorFcp = resultadoCalculoFcp.valor;
    }
    calculaFcpSt(tributavel) {
        this.percentualFcpSt = tributavel.percentualFcpSt;
        const facade = new FacadeCalculadoraTributacao(tributavel, this.tipoDesconto);
        const resultadoCalculoFcpSt = facade.calculaFcpSt();
        this.valorBcFcpSt = resultadoCalculoFcpSt.baseCalculoFcpSt;
        this.valorFcpSt = resultadoCalculoFcpSt.valorFcpSt;
    }
}
//# sourceMappingURL=Cst90.js.map