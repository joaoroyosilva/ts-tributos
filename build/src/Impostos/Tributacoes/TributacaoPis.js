import { CalculaBaseCalculoPis } from '../CalculosDeBc/CalculaBaseCalculoPis';
import { ResultadoCalculoPis } from '../Implementacoes/ResultadoCalculoPis';
import { Utils } from '../../utils/Utils';
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
        const baseCalculo = this.calculaBaseCalculoPis.calculaBaseDeCalculo();
        // NT 007: vPis com arredondamento bancário (half-even), paridade com o php-tributos.
        const valorPis = new Utils().roundHalfEven(this.calculaValorPis(baseCalculo));
        return new ResultadoCalculoPis(baseCalculo, valorPis);
    }
    calculaValorPis(baseCalculo) {
        return (baseCalculo * this.tributavel.percentualPis) / 100;
    }
}
//# sourceMappingURL=TributacaoPis.js.map