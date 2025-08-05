import { Utils } from '../../utils/Utils';
import { CalculaBaseCalculoCbsIbs } from '../CalculosDeBc/CalculaBaseCalculoCbsIbs';
import { ResultadoCalculoCbsIbs } from '../Implementacoes/ResultadoCalculoCbsIbs';
export class TributacaoCbs {
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
        const valor = this.calculaValorCbs(baseCalculo);
        const percentualEfetivo = this.calculaAliquotaEfetiva();
        const valorDiferido = this.calculaValorDiferido(baseCalculo);
        const valorEfetivo = this.calculaValorEfetivo(baseCalculo, percentualEfetivo);
        return new ResultadoCalculoCbsIbs(baseCalculo, valor, valorDiferido, percentualEfetivo, valorEfetivo);
    }
    calculaValorCbs(baseCalculo) {
        return new Utils().round((baseCalculo * this.tributavel.percentualCbs) / 100);
    }
    calculaValorDiferido(baseCalculo) {
        return new Utils().round((baseCalculo * this.tributavel.percentualDiferimentoCbs) / 100);
    }
    calculaAliquotaEfetiva() {
        if (this.tributavel.reducaoCbs == 0 && this.tributavel.percentualRedutorCompraGov == 0) {
            return this.tributavel.percentualCbs;
        }
        if (this.tributavel.percentualRedutorCompraGov > 0) {
            return new Utils().round(this.tributavel.percentualCbs
                * (1 - this.tributavel.reducaoCbs / 100)
                * (1 - this.tributavel.percentualRedutorCompraGov / 100));
        }
        return new Utils().round(this.tributavel.percentualCbs * (1 - this.tributavel.reducaoCbs / 100));
    }
    calculaValorEfetivo(baseCalculo, percentualEfetivo) {
        return new Utils().round((baseCalculo * percentualEfetivo) / 100);
    }
}
//# sourceMappingURL=TributacaoCbs.js.map