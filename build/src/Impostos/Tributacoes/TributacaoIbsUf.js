import { Utils } from '../../utils/Utils';
import { CalculaBaseCalculoCbsIbs } from '../CalculosDeBc/CalculaBaseCalculoCbsIbs';
import { ResultadoCalculoCbsIbs } from '../Implementacoes/ResultadoCalculoCbsIbs';
export class TributacaoIbsUf {
    constructor(tributavel, resultadoTributacao) {
        this.tributavel = tributavel;
        this.resultadoTributacao = resultadoTributacao;
        this.calculaBaseCalculo = new CalculaBaseCalculoCbsIbs(this.tributavel, this.resultadoTributacao);
    }
    calcula() {
        return this.calculaCbsIbs();
    }
    calculaCbsIbs() {
        const baseCalculo = this.calculaBaseCalculo.calculaBaseCalculoBase();
        const valor = this.calculaValorIbsUf(baseCalculo);
        const percentualEfetivo = this.calculaAliquotaEfetiva();
        const valorDiferido = this.calculaValorDiferido(baseCalculo);
        const valorEfetivo = this.calculaValorEfetivo(baseCalculo, percentualEfetivo, valorDiferido);
        const valorCreditoPresumido = this.calculaValorCreditoPresumido(valorEfetivo);
        return new ResultadoCalculoCbsIbs(baseCalculo, valor, valorDiferido, percentualEfetivo, valorEfetivo, valorCreditoPresumido);
    }
    calculaValorIbsUf(baseCalculo) {
        return new Utils().round((baseCalculo * this.tributavel.percentualIbsUf) / 100);
    }
    calculaValorDiferido(baseCalculo) {
        return new Utils().round((baseCalculo * this.tributavel.percentualDiferimentoIbsUf) / 100);
    }
    calculaValorCreditoPresumido(valorEfetivo) {
        return new Utils().round((valorEfetivo * this.tributavel.percentualCreditoPresumidoIbs) / 100);
    }
    calculaAliquotaEfetiva() {
        if (this.tributavel.reducaoIbsUf == 0 && this.tributavel.percentualRedutorCompraGov == 0) {
            return this.tributavel.percentualIbsUf;
        }
        if (this.tributavel.percentualRedutorCompraGov > 0) {
            return new Utils().round(this.tributavel.percentualIbsUf
                * (1 - this.tributavel.reducaoIbsUf / 100)
                * (1 - this.tributavel.percentualRedutorCompraGov / 100));
        }
        return new Utils().round(this.tributavel.percentualIbsUf * (1 - this.tributavel.reducaoIbsUf / 100));
    }
    calculaValorEfetivo(baseCalculo, percentualEfetivo, valorDiferido) {
        return new Utils().round(((baseCalculo * percentualEfetivo) / 100) - valorDiferido);
    }
}
//# sourceMappingURL=TributacaoIbsUf.js.map