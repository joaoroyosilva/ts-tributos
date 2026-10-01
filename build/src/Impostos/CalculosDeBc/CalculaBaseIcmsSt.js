import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CalculaBaseCalculoBase } from './Base/CalculaBaseCalculoBase';
export class CalculaBaseIcmsSt extends CalculaBaseCalculoBase {
    constructor(tributavel, tipoDesconto) {
        super(tributavel);
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
    }
    /**
     * Base do ICMS-ST: (produto + frete + seguro + outras [+ IPI]) ± desconto,
     * reduzida pela redução ST e acrescida do MVA. Desconto e redução entram uma vez só.
     */
    calculaBaseDeCalculo() {
        let baseCalculo = this.tributavel.icmsSobreIpi
            ? super.calculaBaseDeCalculo() + this.tributavel.valorIpi
            : super.calculaBaseDeCalculo();
        baseCalculo =
            this.tipoDesconto === TipoDesconto.condicional
                ? this.calculaIcmsComDescontoCondicional(baseCalculo)
                : this.calculaIcmsComDescontoIncondicional(baseCalculo);
        baseCalculo =
            baseCalculo - (baseCalculo * this.tributavel.percentualReducaoSt) / 100;
        return this.calculaBaseDeCalculoSt(baseCalculo);
    }
    /**
     * Aplica o MVA sobre a base já com desconto e redução ST.
     */
    calculaBaseDeCalculoSt(baseCalculoIcms) {
        return baseCalculoIcms * (1 + this.tributavel.percentualMva / 100);
    }
    calculaIcmsComDescontoIncondicional(baseCalculoInicial) {
        return baseCalculoInicial - this.tributavel.desconto;
    }
    calculaIcmsComDescontoCondicional(baseCalculoInicial) {
        return baseCalculoInicial + this.tributavel.desconto;
    }
}
//# sourceMappingURL=CalculaBaseIcmsSt.js.map