import { CalculaBaseCalculoCofins } from '../CalculosDeBc/CalculaBaseCalculoCofins';
import { ResultadoCalculoCofins } from '../Implementacoes/ResultadoCalculoCofins';
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
        const baseCalculo = this.tributavel.icmsSobreIpi
            ? this.calculaBaseCalculoCofins.calculaBaseDeCalculo() +
                this.tributavel.valorIpi
            : this.calculaBaseCalculoCofins.calculaBaseDeCalculo();
        const valorCofins = this.calculaValorCofins(baseCalculo);
        return new ResultadoCalculoCofins(baseCalculo, valorCofins);
    }
    calculaValorCofins(baseCalculo) {
        return (baseCalculo * this.tributavel.percentualCofins) / 100;
    }
}
//# sourceMappingURL=TributacaoCofins.js.map