import { CalculaBaseCalculoIcms } from '../CalculosDeBc/CalculaBaseCalculoIcms';
import { ResultadoCalculoIcms } from '../Implementacoes/ResultadoCalculoIcms';
export class TributacaoIcms {
    constructor(tributavel, tipoDesconto) {
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
        this.calculaBaseCalculoIcms = new CalculaBaseCalculoIcms(tributavel, tipoDesconto);
    }
    calcula() {
        return this.calculaIcms();
    }
    calculaIcms() {
        const baseCalculo = this.calculaBaseCalculoIcms.calculaBaseDeCalculo();
        const valorIcms = this.calculaValorIcms(baseCalculo);
        return new ResultadoCalculoIcms(baseCalculo, valorIcms);
    }
    calculaValorIcms(baseCalculo) {
        return (baseCalculo * this.tributavel.percentualIcms) / 100;
    }
}
//# sourceMappingURL=TributacaoIcms.js.map