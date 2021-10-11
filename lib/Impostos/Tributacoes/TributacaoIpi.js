"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TributacaoIpi = void 0;
var CalculaBaseCalculoIpi_1 = require("../CalculosDeBc/CalculaBaseCalculoIpi");
var ResultadoCalculoIpi_1 = require("../Implementacoes/ResultadoCalculoIpi");
var TributacaoIpi = /** @class */ (function () {
    function TributacaoIpi(tributavel, tipoDesconto) {
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
        this.calculaBaseCalculoIpi = new CalculaBaseCalculoIpi_1.CalculaBaseCalculoIpi(tributavel, tipoDesconto);
    }
    TributacaoIpi.prototype.calcula = function () {
        return this.calculaIpi();
    };
    TributacaoIpi.prototype.calculaIpi = function () {
        var baseCalculo = this.calculaBaseCalculoIpi.calculaBaseDeCalculo();
        var valorIpi = this.calculaValorIpi(baseCalculo);
        return new ResultadoCalculoIpi_1.ResultadoCalculoIpi(baseCalculo, valorIpi);
    };
    TributacaoIpi.prototype.calculaValorIpi = function (baseCalculo) {
        return (baseCalculo * this.tributavel.percentualIpi) / 100;
    };
    return TributacaoIpi;
}());
exports.TributacaoIpi = TributacaoIpi;
//# sourceMappingURL=TributacaoIpi.js.map