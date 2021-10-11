"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TributacaoDifal = void 0;
var CalculaBaseCalculoIcms_1 = require("../CalculosDeBc/CalculaBaseCalculoIcms");
var ResultadoCalculoDifal_1 = require("../Implementacoes/ResultadoCalculoDifal");
var TributacaoFcp_1 = require("./TributacaoFcp");
var TributacaoDifal = /** @class */ (function () {
    function TributacaoDifal(tributavel, tipoDesconto) {
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
        this.calculaBaseCalculoIcms = new CalculaBaseCalculoIcms_1.CalculaBaseCalculoIcms(tributavel, tipoDesconto);
        this.tributacaoFcp = new TributacaoFcp_1.TributacaoFcp(tributavel, tipoDesconto);
    }
    TributacaoDifal.prototype.calcula = function () {
        return this.calculaIcms();
    };
    TributacaoDifal.prototype.calculaIcms = function () {
        var baseCalculo = this.calculaBaseCalculoIcms.calculaBaseDeCalculo();
        var resultadoFcfp = this.tributacaoFcp.calcula();
        var difal = this.calcularDifal(baseCalculo);
        var percentualRateioOrigem = 0;
        var percentualRateioDestino = 100;
        var aliquotaOrigem = difal * (percentualRateioOrigem / 100);
        var aliquotaDestino = difal * (percentualRateioDestino / 100);
        return new ResultadoCalculoDifal_1.ResultadoCalculoDifal(baseCalculo, difal, resultadoFcfp.valor, aliquotaDestino, aliquotaOrigem);
    };
    TributacaoDifal.prototype.calcularDifal = function (baseCalculo) {
        return (baseCalculo *
            ((this.tributavel.percentualDifalInterna -
                this.tributavel.percentualDifalInterestadual) /
                100));
    };
    return TributacaoDifal;
}());
exports.TributacaoDifal = TributacaoDifal;
//# sourceMappingURL=TributacaoDifal.js.map