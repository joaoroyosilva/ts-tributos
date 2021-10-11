"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TributacaoIcms = void 0;
var CalculaBaseCalculoIcms_1 = require("../CalculosDeBc/CalculaBaseCalculoIcms");
var ResultadoCalculoIcms_1 = require("../Implementacoes/ResultadoCalculoIcms");
var TributacaoIcms = /** @class */ (function () {
    function TributacaoIcms(tributavel, tipoDesconto) {
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
        this.calculaBaseCalculoIcms = new CalculaBaseCalculoIcms_1.CalculaBaseCalculoIcms(tributavel, tipoDesconto);
    }
    TributacaoIcms.prototype.calcula = function () {
        return this.calculaIcms();
    };
    TributacaoIcms.prototype.calculaIcms = function () {
        var baseCalculo = this.calculaBaseCalculoIcms.calculaBaseDeCalculo();
        var valorIcms = this.calculaValorIcms(baseCalculo);
        return new ResultadoCalculoIcms_1.ResultadoCalculoIcms(baseCalculo, valorIcms);
    };
    TributacaoIcms.prototype.calculaValorIcms = function (baseCalculo) {
        return (baseCalculo * this.tributavel.percentualIcms) / 100;
    };
    return TributacaoIcms;
}());
exports.TributacaoIcms = TributacaoIcms;
//# sourceMappingURL=TributacaoIcms.js.map