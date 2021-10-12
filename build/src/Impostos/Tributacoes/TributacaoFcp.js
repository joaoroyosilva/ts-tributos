import { CalculaBaseFcp } from '../CalculosDeBc/CalculaBaseFcp';
import { ResultadoCalculoFcp } from '../Implementacoes/ResultadoCalculoFcp';
export class TributacaoFcp {
    constructor(tributavel, tipoDesconto) {
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
        this.calculaBaseFcp = new CalculaBaseFcp(tributavel, tipoDesconto);
    }
    calcula() {
        return this.calculaFcp();
    }
    calculaFcp() {
        const baseCalculo = this.calculaBaseFcp.calculaBaseDeCalculo();
        const fcp = baseCalculo * (this.tributavel.percentualFcp / 100);
        return new ResultadoCalculoFcp(baseCalculo, fcp);
    }
}
//# sourceMappingURL=TributacaoFcp.js.map