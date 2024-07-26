import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CalculaBaseCalculoBase } from './Base/CalculaBaseCalculoBase';
export class CalculaBaseIcmsSt extends CalculaBaseCalculoBase {
    constructor(tributavel, tipoDesconto) {
        super(tributavel);
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
    }
    calculaBaseDeCalculo() {
        let baseCalculo = this.tributavel.icmsSobreIpi
            ? super.calculaBaseDeCalculo() + this.tributavel.valorIpi
            : super.calculaBaseDeCalculo();
        baseCalculo =
            baseCalculo - (baseCalculo * this.tributavel.percentualReducaoSt) / 100;
        const baseCalculoSt = this.calculaBaseDeCalculoSt(baseCalculo);
        return baseCalculoSt;
    }
    calculaBaseDeCalculoSt(baseCalculoIcms) {
        let baseCalculoSt = this.tipoDesconto === TipoDesconto.condicional
            ? this.calculaIcmsComDescontoCondicional(baseCalculoIcms)
            : this.calculaIcmsComDescontoIncondicional(baseCalculoIcms);
        baseCalculoSt = baseCalculoSt * (1 + this.tributavel.percentualMva / 100);
        return baseCalculoSt;
    }
    calculaIcmsComDescontoIncondicional(baseCalculoInicial) {
        let baseCalculo = baseCalculoInicial - this.tributavel.desconto;
        baseCalculo =
            baseCalculo - (baseCalculo * this.tributavel.percentualReducaoSt) / 100;
        return baseCalculo;
    }
    calculaIcmsComDescontoCondicional(baseCalculoInicial) {
        let baseCalculo = baseCalculoInicial + this.tributavel.desconto;
        baseCalculo =
            baseCalculo - (baseCalculo * this.tributavel.percentualReducaoSt) / 100;
        return baseCalculo;
    }
}
//# sourceMappingURL=CalculaBaseIcmsSt.js.map