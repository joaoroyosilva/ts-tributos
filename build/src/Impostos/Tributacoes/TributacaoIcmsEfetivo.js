import { CalculaBaseCalculoIcmsEfetivo } from '../CalculosDeBc/CalculaBaseCalculoIcmsEfetivo';
import { ResultadoCalculoIcmsEfetivo } from '../Implementacoes/ResultadoCalculoIcmsEfetivo';
export class TributacaoIcmsEfetivo {
    constructor(tributavel, tipoDesconto) {
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
        this.calculaBaseCalculoIcmsEfetivo = new CalculaBaseCalculoIcmsEfetivo(tributavel, tipoDesconto);
    }
    calcula() {
        return this.calculaIcms();
    }
    calculaIcms() {
        const baseCalculo = this.calculaBaseCalculoIcmsEfetivo.calculaBaseDeCalculo();
        const valorIcms = this.calculaValorIcms(baseCalculo);
        return new ResultadoCalculoIcmsEfetivo(baseCalculo, valorIcms);
    }
    calculaValorIcms(baseCalculo) {
        return (baseCalculo * this.tributavel.percentualIcmsEfetivo) / 100;
    }
}
//# sourceMappingURL=TributacaoIcmsEfetivo.js.map