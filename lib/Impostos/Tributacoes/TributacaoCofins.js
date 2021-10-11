"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TributacaoCofins = void 0;
var CalculaBaseCalculoCofins_1 = require("../CalculosDeBc/CalculaBaseCalculoCofins");
var ResultadoCalculoCofins_1 = require("../Implementacoes/ResultadoCalculoCofins");
var TributacaoCofins = /** @class */ (function () {
    function TributacaoCofins(tributavel, tipoDesconto) {
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
        this.calculaBaseCalculoCofins = new CalculaBaseCalculoCofins_1.CalculaBaseCalculoCofins(tributavel, tipoDesconto);
    }
    TributacaoCofins.prototype.calcula = function () {
        return this.calculaCofins();
    };
    TributacaoCofins.prototype.calculaCofins = function () {
        var baseCalculo = this.calculaBaseCalculoCofins.calculaBaseDeCalculo() +
            this.tributavel.valorIpi;
        var valorCofins = this.calculaValorCofins(baseCalculo);
        return new ResultadoCalculoCofins_1.ResultadoCalculoCofins(baseCalculo, valorCofins);
    };
    TributacaoCofins.prototype.calculaValorCofins = function (baseCalculo) {
        return (baseCalculo * this.tributavel.percentualCofins) / 100;
    };
    return TributacaoCofins;
}());
exports.TributacaoCofins = TributacaoCofins;
//# sourceMappingURL=TributacaoCofins.js.map