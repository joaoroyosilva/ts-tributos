import { CalculaBaseCalculoIssqn } from '../CalculosDeBc/CalculaBaseCalculoIssqn';
import { ResultadoCalculoIssqn } from '../Implementacoes/ResultadoCalculoIssqn';
export class TributacaoIssqn {
    constructor(tributavel, tipoDesconto) {
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
        this.calculaBaseCalculoIssqn = new CalculaBaseCalculoIssqn(tributavel, tipoDesconto);
    }
    calcula(calcularRetencoes) {
        return this.calcularIssqn(calcularRetencoes);
    }
    calcularIssqn(calcularRetencoes) {
        const baseCalculo = this.calculaBaseCalculoIssqn.calculaBaseDeCalculo();
        const valorIss = this.calcularValorIssqn(baseCalculo);
        return !calcularRetencoes
            ? new ResultadoCalculoIssqn(baseCalculo, valorIss)
            : this.calcularRetencoes(baseCalculo, valorIss);
    }
    calcularRetencoes(baseCalculo, valorIss) {
        const baseCalculoInss = baseCalculo;
        const baseCalculoIrrf = baseCalculo;
        const calcularRetencoes = this.calcularValorTotalTributacao(baseCalculo);
        const valorRetPis = calcularRetencoes
            ? this.calcularRetPis(baseCalculo)
            : 0;
        const valorRetCofins = calcularRetencoes
            ? this.calcularRetCofins(baseCalculo)
            : 0;
        const valorRetCsll = calcularRetencoes
            ? this.calcularRetCsll(baseCalculo)
            : 0;
        const valorRetIrrf = calcularRetencoes
            ? this.calcularRetIrrf(baseCalculo)
            : 0;
        const valorRetInss = calcularRetencoes
            ? this.calcularRetInss(baseCalculo)
            : 0;
        return new ResultadoCalculoIssqn(baseCalculo, valorIss, baseCalculoInss, baseCalculoIrrf, valorRetPis, valorRetCofins, valorRetCsll, valorRetIrrf, valorRetInss);
    }
    calcularValorIssqn(baseCalculo) {
        const valor = (baseCalculo * this.tributavel.percentualIssqn) / 100;
        return valor > 10 ? valor : 0;
    }
    calcularRetPis(baseCalculo) {
        return (baseCalculo * this.tributavel.percentualRetPis) / 100;
    }
    calcularRetCofins(baseCalculo) {
        return (baseCalculo * this.tributavel.percentualRetCofins) / 100;
    }
    calcularRetCsll(baseCalculo) {
        return (baseCalculo * this.tributavel.percentualRetCsll) / 100;
    }
    calcularRetIrrf(baseCalculo) {
        const valor = (baseCalculo * this.tributavel.percentualRetIrrf) / 100;
        return valor > 10 ? valor : 0;
    }
    calcularValorTotalTributacao(baseCalculo) {
        const percentualTotal = this.tributavel.percentualRetPis +
            this.tributavel.percentualRetCofins +
            this.tributavel.percentualRetCsll;
        const valor = (baseCalculo * percentualTotal) / 100;
        return valor > 10;
    }
    calcularRetInss(baseCalculo) {
        const valor = (baseCalculo * this.tributavel.percentualRetInss) / 100;
        return valor > 29 ? valor : 0;
    }
}
//# sourceMappingURL=TributacaoIssqn.js.map