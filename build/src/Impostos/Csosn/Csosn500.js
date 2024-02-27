import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { Csosn } from '../../Flags/Csosn';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CsosnBase } from './Base/CsosnBase';
export class Csosn500 extends CsosnBase {
    constructor(origemMercadoria = OrigemMercadoria.nacional, tipoDesconto = TipoDesconto.incondicional) {
        super(origemMercadoria, tipoDesconto);
        this.csosn = Csosn.csosn500;
    }
    calcula(tributavel) {
        this.percentualSt =
            tributavel.percentualIcmsSt + tributavel.percentualFcpSt;
        this.percentualIcmsEfetivo =
            tributavel.percentualIcmsSt + tributavel.percentualFcpSt;
        let facadeCalculadoraTributacao = new FacadeCalculadoraTributacao(tributavel, this.tipoDesconto);
        let icms = facadeCalculadoraTributacao.calculaIcmsEfetivo();
        this.baseCalculoIcmsEfetivo = icms.baseCalculo;
        this.valorIcmsEfetivo = icms.valor;
    }
}
//# sourceMappingURL=Csosn500.js.map