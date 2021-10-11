"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TributacaoPis = void 0;
var CalculaBaseCalculoPis_1 = require("../CalculosDeBc/CalculaBaseCalculoPis");
var ResultadoCalculoPis_1 = require("../Implementacoes/ResultadoCalculoPis");
var TributacaoPis = /** @class */ (function () {
    function TributacaoPis(tributavel, tipoDesconto) {
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
        this.calculaBaseCalculoPis = new CalculaBaseCalculoPis_1.CalculaBaseCalculoPis(tributavel, tipoDesconto);
    }
    TributacaoPis.prototype.calcula = function () {
        return this.calculaPis();
    };
    TributacaoPis.prototype.calculaPis = function () {
        var baseCalculo = this.calculaBaseCalculoPis.calculaBaseDeCalculo() +
            this.tributavel.valorIpi;
        var valorPis = this.calculaValorPis(baseCalculo);
        return new ResultadoCalculoPis_1.ResultadoCalculoPis(baseCalculo, valorPis);
    };
    TributacaoPis.prototype.calculaValorPis = function (baseCalculo) {
        return (baseCalculo * this.tributavel.percentualPis) / 100;
    };
    return TributacaoPis;
}());
exports.TributacaoPis = TributacaoPis;
//# sourceMappingURL=TributacaoPis.js.map