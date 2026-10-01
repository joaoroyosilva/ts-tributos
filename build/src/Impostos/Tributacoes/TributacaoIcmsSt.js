import { CalculaBaseCalculoIcmsSemIpi } from '../CalculosDeBc/CalculaBaseIcmsSemIpi';
import { CalculaBaseIcmsSt } from '../CalculosDeBc/CalculaBaseIcmsSt';
import { ResultadoCalculoIcmsSt } from '../Implementacoes/ResultadoCalculoIcmsSt';
export class TributacaoIcmsSt {
    constructor(tributavel, tipoDesconto) {
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
        this.calculoBaseIcmsSemIpi = new CalculaBaseCalculoIcmsSemIpi(tributavel, tipoDesconto);
        this.baseIcmsSt = new CalculaBaseIcmsSt(tributavel, tipoDesconto);
    }
    calcula() {
        return this.calculaIcmsSt();
    }
    calculaIcmsSt() {
        const baseCalculoOperacaoPropria = this.calculoBaseIcmsSemIpi.calculaBaseDeCalculo();
        const valorIcmsProprio = this.calculaIcms(baseCalculoOperacaoPropria);
        const baseCalculoIcmsSt = this.baseIcmsSt.calculaBaseDeCalculo();
        // ST abaixo do ICMS próprio não gera crédito: piso zero, base ST mantida
        const valorIcmsSt = Math.max(0, baseCalculoIcmsSt * (this.tributavel.percentualIcmsSt / 100) -
            valorIcmsProprio);
        if (this.tributavel.percentualIcmsSt == 0) {
            return new ResultadoCalculoIcmsSt(baseCalculoOperacaoPropria, 0, 0, 0);
        }
        return new ResultadoCalculoIcmsSt(baseCalculoOperacaoPropria, valorIcmsProprio, baseCalculoIcmsSt, valorIcmsSt);
    }
    calculaIcms(baseCalculo) {
        return (baseCalculo * this.tributavel.percentualIcms) / 100;
    }
}
//# sourceMappingURL=TributacaoIcmsSt.js.map