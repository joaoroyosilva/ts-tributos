import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CalculaBaseCalculoBase } from './Base/CalculaBaseCalculoBase';
export class CalculaBaseCalculoPis extends CalculaBaseCalculoBase {
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
        const baseCalculo = baseCalculoInicial - this.tributavel.desconto;
        return baseCalculo;
    }
    calculaIcmsComDescontoCondicional(baseCalculoInicial) {
        const baseCalculo = baseCalculoInicial + this.tributavel.desconto;
        return baseCalculo;
    }
}
//# sourceMappingURL=CalculaBaseCalculoPis.js.map