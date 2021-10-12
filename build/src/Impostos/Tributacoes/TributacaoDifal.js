import { CalculaBaseCalculoIcms } from '../CalculosDeBc/CalculaBaseCalculoIcms';
import { ResultadoCalculoDifal } from '../Implementacoes/ResultadoCalculoDifal';
import { TributacaoFcp } from './TributacaoFcp';
export class TributacaoDifal {
    constructor(tributavel, tipoDesconto) {
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
        this.calculaBaseCalculoIcms = new CalculaBaseCalculoIcms(tributavel, tipoDesconto);
        this.tributacaoFcp = new TributacaoFcp(tributavel, tipoDesconto);
    }
    calcula() {
        return this.calculaIcms();
    }
    calculaIcms() {
        const baseCalculo = this.calculaBaseCalculoIcms.calculaBaseDeCalculo();
        const resultadoFcfp = this.tributacaoFcp.calcula();
        const difal = this.calcularDifal(baseCalculo);
        const percentualRateioOrigem = 0;
        const percentualRateioDestino = 100;
        const aliquotaOrigem = difal * (percentualRateioOrigem / 100);
        const aliquotaDestino = difal * (percentualRateioDestino / 100);
        return new ResultadoCalculoDifal(baseCalculo, difal, resultadoFcfp.valor, aliquotaDestino, aliquotaOrigem);
    }
    calcularDifal(baseCalculo) {
        return (baseCalculo *
            ((this.tributavel.percentualDifalInterna -
                this.tributavel.percentualDifalInterestadual) /
                100));
    }
}
//# sourceMappingURL=TributacaoDifal.js.map