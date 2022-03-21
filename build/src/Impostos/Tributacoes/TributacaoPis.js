import { CalculaBaseCalculoPis } from '../CalculosDeBc/CalculaBaseCalculoPis';
import { ResultadoCalculoPis } from '../Implementacoes/ResultadoCalculoPis';
export class TributacaoPis {
    constructor(tributavel, tipoDesconto) {
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
        this.calculaBaseCalculoPis = new CalculaBaseCalculoPis(tributavel, tipoDesconto);
    }
    calcula() {
        return this.calculaPis();
    }
    calculaPis() {
        const baseCalculo = this.tributavel.icmsSobreIpi
            ? this.calculaBaseCalculoPis.calculaBaseDeCalculo() +
                this.tributavel.valorIpi
            : this.calculaBaseCalculoPis.calculaBaseDeCalculo();
        const valorPis = this.calculaValorPis(baseCalculo);
        return new ResultadoCalculoPis(baseCalculo, valorPis);
    }
    calculaValorPis(baseCalculo) {
        return (baseCalculo * this.tributavel.percentualPis) / 100;
    }
}
//# sourceMappingURL=TributacaoPis.js.map