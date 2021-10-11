"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TributacaoIssqn = void 0;
var CalculaBaseCalculoIssqn_1 = require("../CalculosDeBc/CalculaBaseCalculoIssqn");
var ResultadoCalculoIssqn_1 = require("../Implementacoes/ResultadoCalculoIssqn");
var TributacaoIssqn = /** @class */ (function () {
    function TributacaoIssqn(tributavel, tipoDesconto) {
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
        this.calculaBaseCalculoIssqn = new CalculaBaseCalculoIssqn_1.CalculaBaseCalculoIssqn(tributavel, tipoDesconto);
    }
    TributacaoIssqn.prototype.calcula = function (calcularRetencoes) {
        return this.calcularIssqn(calcularRetencoes);
    };
    TributacaoIssqn.prototype.calcularIssqn = function (calcularRetencoes) {
        var baseCalculo = this.calculaBaseCalculoIssqn.calculaBaseDeCalculo();
        var valorIss = this.calcularValorIssqn(baseCalculo);
        return !calcularRetencoes
            ? new ResultadoCalculoIssqn_1.ResultadoCalculoIssqn(baseCalculo, valorIss)
            : this.calcularRetencoes(baseCalculo, valorIss);
    };
    TributacaoIssqn.prototype.calcularRetencoes = function (baseCalculo, valorIss) {
        var baseCalculoInss = baseCalculo;
        var baseCalculoIrrf = baseCalculo;
        var calcularRetencoes = this.calcularValorTotalTributacao(baseCalculo);
        var valorRetPis = calcularRetencoes
            ? this.calcularRetPis(baseCalculo)
            : 0;
        var valorRetCofins = calcularRetencoes
            ? this.calcularRetCofins(baseCalculo)
            : 0;
        var valorRetCsll = calcularRetencoes
            ? this.calcularRetCsll(baseCalculo)
            : 0;
        var valorRetIrrf = calcularRetencoes
            ? this.calcularRetIrrf(baseCalculo)
            : 0;
        var valorRetInss = calcularRetencoes
            ? this.calcularRetInss(baseCalculo)
            : 0;
        return new ResultadoCalculoIssqn_1.ResultadoCalculoIssqn(baseCalculo, valorIss, baseCalculoInss, baseCalculoIrrf, valorRetPis, valorRetCofins, valorRetCsll, valorRetIrrf, valorRetInss);
    };
    TributacaoIssqn.prototype.calcularValorIssqn = function (baseCalculo) {
        var valor = (baseCalculo * this.tributavel.percentualIssqn) / 100;
        return valor > 10 ? valor : 0;
    };
    TributacaoIssqn.prototype.calcularRetPis = function (baseCalculo) {
        return (baseCalculo * this.tributavel.percentualRetPis) / 100;
    };
    TributacaoIssqn.prototype.calcularRetCofins = function (baseCalculo) {
        return (baseCalculo * this.tributavel.percentualRetCofins) / 100;
    };
    TributacaoIssqn.prototype.calcularRetCsll = function (baseCalculo) {
        return (baseCalculo * this.tributavel.percentualRetCsll) / 100;
    };
    TributacaoIssqn.prototype.calcularRetIrrf = function (baseCalculo) {
        var valor = (baseCalculo * this.tributavel.percentualRetIrrf) / 100;
        return valor > 10 ? valor : 0;
    };
    TributacaoIssqn.prototype.calcularValorTotalTributacao = function (baseCalculo) {
        var percentualTotal = this.tributavel.percentualRetPis +
            this.tributavel.percentualRetCofins +
            this.tributavel.percentualRetCsll;
        var valor = (baseCalculo * percentualTotal) / 100;
        return valor > 10;
    };
    TributacaoIssqn.prototype.calcularRetInss = function (baseCalculo) {
        var valor = (baseCalculo * this.tributavel.percentualRetInss) / 100;
        return valor > 29 ? valor : 0;
    };
    return TributacaoIssqn;
}());
exports.TributacaoIssqn = TributacaoIssqn;
//# sourceMappingURL=TributacaoIssqn.js.map