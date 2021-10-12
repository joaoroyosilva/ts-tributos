import { CalculaBaseIcmsSt } from '../CalculosDeBc/CalculaBaseIcmsSt';
import { ResultadoCalculoFcpSt } from '../Implementacoes/ResultadoCalculoFcpSt';
export class TributacaoFcpSt {
    constructor(tributavel, tipoDesconto) {
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
        this.calculaBaseIcmsSt = new CalculaBaseIcmsSt(tributavel, tipoDesconto);
    }
    calcula() {
        return this.calculaFcpSt();
    }
    calculaFcpSt() {
        const baseCalculo = this.calculaBaseIcmsSt.calculaBaseDeCalculo();
        const fcp = baseCalculo * (this.tributavel.percentualFcpSt / 100);
        return new ResultadoCalculoFcpSt(baseCalculo, fcp);
    }
}
//# sourceMappingURL=TributacaoFcpSt.js.map