import { ArgumentException } from '../../Exceptions/ArgumentException';
import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { Documento } from '../../Flags/Documento';
import { CalculaBaseCalculoIcms } from '../CalculosDeBc/CalculaBaseCalculoIcms';
import { ResultadoCalculoCredito } from '../Implementacoes/ResultadoCalculoCredito';
export class TributacaoCreditoIcms {
    constructor(tributavel, tipoDesconto) {
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
        this.calculaBaseCalculoIcms = new CalculaBaseCalculoIcms(tributavel, tipoDesconto);
    }
    calcula() {
        return this.calculaIcmsCredito();
    }
    calculaIcmsCredito() {
        const baseCalculo = this.calculaBaseCalculoIcms.calculaBaseDeCalculo();
        const valorCredito = this.calculaCredito(baseCalculo);
        return new ResultadoCalculoCredito(baseCalculo, valorCredito);
    }
    calculaCredito(baseCalculo) {
        switch (this.tributavel.documento) {
            case Documento.MFe:
            case Documento.SAT:
            case Documento.MDFe:
            case Documento.NFCe:
            case Documento.CTeOs:
            case Documento.NFe:
                return (baseCalculo * this.tributavel.percentualCredito) / 100;
            case Documento.CTe:
                var resultadoIcms = new FacadeCalculadoraTributacao(this.tributavel, this.tipoDesconto).calculaIcmsSt();
                return ((resultadoIcms.valorIcmsSt * this.tributavel.percentualCredito) / 100);
            default:
                throw new ArgumentException();
        }
    }
}
//# sourceMappingURL=TributacaoCreditoIcms.js.map