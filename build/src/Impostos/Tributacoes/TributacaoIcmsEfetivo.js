import { CalculaBaseCalculoIcms } from '../CalculosDeBc/CalculaBaseCalculoIcms';
import { ResultadoCalculoIcmsEfetivo } from '../Implementacoes/ResultadoCalculoIcmsEfetivo';
export class TributacaoIcmsEfetivo {
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
        return new ResultadoCalculoIcmsEfetivo(baseCalculo, valorIcms);
    }
    calculaValorIcms(baseCalculo) {
        return (baseCalculo * this.tributavel.percentualIcmsEfetivo) / 100;
    }
}
//# sourceMappingURL=TributacaoIcmsEfetivo.js.map