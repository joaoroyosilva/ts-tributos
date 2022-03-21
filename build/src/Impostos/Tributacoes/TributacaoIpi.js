import { CalculaBaseCalculoIpi } from '../CalculosDeBc/CalculaBaseCalculoIpi';
import { ResultadoCalculoIpi } from '../Implementacoes/ResultadoCalculoIpi';
import { Documento } from '../../Flags/Documento';
export class TributacaoIpi {
    constructor(tributavel, tipoDesconto) {
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
        this.calculaBaseCalculoIpi = new CalculaBaseCalculoIpi(tributavel, tipoDesconto);
    }
    calcula() {
        return this.calculaIpi();
    }
    calculaIpi() {
        const baseCalculo = this.calculaBaseCalculoIpi.calculaBaseDeCalculo();
        const valorIpi = this.calculaValorIpi(baseCalculo);
        if (this.tributavel.documento == Documento.NFCe) {
            return new ResultadoCalculoIpi(0, 0);
        }
        return new ResultadoCalculoIpi(baseCalculo, valorIpi);
    }
    calculaValorIpi(baseCalculo) {
        return (baseCalculo * this.tributavel.percentualIpi) / 100;
    }
}
//# sourceMappingURL=TributacaoIpi.js.map