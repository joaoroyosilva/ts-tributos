import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CalculaBaseCalculoBase } from './Base/CalculaBaseCalculoBase';
export class CalculaBaseCalculoIcmsSemIpi extends CalculaBaseCalculoBase {
    constructor(tributavel, tipoDesconto) {
        super(tributavel);
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
    }
    calculaBaseDeCalculo() {
        const baseCalculo = super.calculaBaseDeCalculo();
        return this.tipoDesconto === TipoDesconto.condicional
            ? this.calculaIcmsComDescontoCondicional(baseCalculo)
            : this.calculaIcmsComDescontoIncondicional(baseCalculo);
    }
    calculaIcmsComDescontoIncondicional(baseCalculoInicial) {
        let baseCalculo = baseCalculoInicial - this.tributavel.desconto;
        baseCalculo =
            baseCalculo - (baseCalculo * this.tributavel.percentualReducao) / 100;
        return baseCalculo;
    }
    calculaIcmsComDescontoCondicional(baseCalculoInicial) {
        let baseCalculo = baseCalculoInicial + this.tributavel.desconto;
        baseCalculo =
            baseCalculo - (baseCalculo * this.tributavel.percentualReducao) / 100;
        return baseCalculo;
    }
}
//# sourceMappingURL=CalculaBaseIcmsSemIpi.js.map