import { Utils } from '../../utils/Utils';
import { CalculaBaseCalculoCbsIbs } from '../CalculosDeBc/CalculaBaseCalculoCbsIbs';
import { ResultadoCalculoCbsIbs } from '../Implementacoes/ResultadoCalculoCbsIbs';
export class TributacaoIbsMun {
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
        const valor = this.calculaValorIbsMun(baseCalculo);
        const percentualEfetivo = this.calculaAliquotaEfetiva();
        const valorDiferido = this.calculaValorDiferido(baseCalculo);
        const valorEfetivo = this.calculaValorEfetivo(baseCalculo, percentualEfetivo);
        return new ResultadoCalculoCbsIbs(baseCalculo, valor, valorDiferido, percentualEfetivo, valorEfetivo);
    }
    calculaValorIbsMun(baseCalculo) {
        return new Utils().round((baseCalculo * this.tributavel.percentualIbsMun) / 100);
    }
    calculaValorDiferido(baseCalculo) {
        return new Utils().round((baseCalculo * this.tributavel.percentualDiferimentoIbsMun) / 100);
    }
    calculaAliquotaEfetiva() {
        if (this.tributavel.reducaoIbsMun == 0 && this.tributavel.percentualRedutorCompraGov == 0) {
            return this.tributavel.percentualIbsMun;
        }
        if (this.tributavel.percentualRedutorCompraGov > 0) {
            return new Utils().round(this.tributavel.percentualIbsMun
                * (1 - this.tributavel.reducaoIbsMun / 100)
                * (1 - this.tributavel.percentualRedutorCompraGov / 100));
        }
        return new Utils().round(this.tributavel.percentualIbsMun *
            (1 - this.tributavel.reducaoIbsMun / 100));
    }
    calculaValorEfetivo(baseCalculo, percentualEfetivo) {
        return new Utils().round((baseCalculo * percentualEfetivo) / 100);
    }
}
//# sourceMappingURL=TributacaoIbsMun.js.map