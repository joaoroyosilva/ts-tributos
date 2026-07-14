import { CalculaBaseCalculoCofins } from '../CalculosDeBc/CalculaBaseCalculoCofins';
import { ResultadoCalculoCofins } from '../Implementacoes/ResultadoCalculoCofins';
import { Utils } from '../../utils/Utils';
export class TributacaoCofins {
    constructor(tributavel, tipoDesconto) {
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
        this.calculaBaseCalculoCofins = new CalculaBaseCalculoCofins(tributavel, tipoDesconto);
    }
    calcula() {
        return this.calculaCofins();
    }
    calculaCofins() {
        const baseCalculo = this.calculaBaseCalculoCofins.calculaBaseDeCalculo();
        // NT 007: vCofins com arredondamento bancário (half-even), paridade com o php-tributos.
        const valorCofins = new Utils().roundHalfEven(this.calculaValorCofins(baseCalculo));
        return new ResultadoCalculoCofins(baseCalculo, valorCofins);
    }
    calculaValorCofins(baseCalculo) {
        return (baseCalculo * this.tributavel.percentualCofins) / 100;
    }
}
//# sourceMappingURL=TributacaoCofins.js.map