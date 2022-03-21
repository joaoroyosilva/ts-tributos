import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CalculaBaseCalculoBase } from './Base/CalculaBaseCalculoBase';
export class CalculaBaseCalculoIcms extends CalculaBaseCalculoBase {
    constructor(tributavel, tipoDesconto) {
        super(tributavel);
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
    }
    calculaBaseDeCalculo() {
        const baseCalculo = this.tributavel.icmsSobreIpi
            ? super.calculaBaseDeCalculo() + this.tributavel.valorIpi
            : super.calculaBaseDeCalculo();
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
//# sourceMappingURL=CalculaBaseCalculoIcms.js.map