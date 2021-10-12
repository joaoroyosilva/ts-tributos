import { CalculaBaseCalculoIpi } from '../CalculosDeBc/CalculaBaseCalculoIpi';
import { ResultadoCalculoIpi } from '../Implementacoes/ResultadoCalculoIpi';
export class TributacaoIpi {
    constructor(tributavel, tipoDesconto) {
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
        this.calculaBaseCalculoIpi = new CalculaBaseCalculoIpi(tributavel, tipoDesconto);
    }
    calcula() {
        return this.calculaIpi();
    }
    calculaIpi() {
        const baseCalculo = this.calculaBaseCalculoIpi.calculaBaseDeCalculo();
        const valorIpi = this.calculaValorIpi(baseCalculo);
        return new ResultadoCalculoIpi(baseCalculo, valorIpi);
    }
    calculaValorIpi(baseCalculo) {
        return (baseCalculo * this.tributavel.percentualIpi) / 100;
    }
}
//# sourceMappingURL=TributacaoIpi.js.map