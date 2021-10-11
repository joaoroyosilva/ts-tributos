"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TributacaoIcmsSt = void 0;
var CalculaBaseIcmsSemIpi_1 = require("../CalculosDeBc/CalculaBaseIcmsSemIpi");
var CalculaBaseIcmsSt_1 = require("../CalculosDeBc/CalculaBaseIcmsSt");
var ResultadoCalculoIcmsSt_1 = require("../Implementacoes/ResultadoCalculoIcmsSt");
var TributacaoIcmsSt = /** @class */ (function () {
    function TributacaoIcmsSt(tributavel, tipoDesconto) {
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
        this.calculoBaseIcmsSemIpi = new CalculaBaseIcmsSemIpi_1.CalculaBaseCalculoIcmsSemIpi(tributavel, tipoDesconto);
        this.baseIcmsSt = new CalculaBaseIcmsSt_1.CalculaBaseIcmsSt(tributavel, tipoDesconto);
    }
    TributacaoIcmsSt.prototype.calcula = function () {
        return this.calculaIcmsSt();
    };
    TributacaoIcmsSt.prototype.calculaIcmsSt = function () {
        var baseCalculoOperacaoPropria = this.calculoBaseIcmsSemIpi.calculaBaseDeCalculo();
        var valorIcmsProprio = this.calculaIcms(baseCalculoOperacaoPropria);
        var baseCalculoIcmsSt = this.baseIcmsSt.calculaBaseDeCalculo();
        var valorIcmsSt = baseCalculoIcmsSt * (this.tributavel.percentualIcmsSt / 100) -
            valorIcmsProprio;
        return new ResultadoCalculoIcmsSt_1.ResultadoCalculoIcmsSt(baseCalculoOperacaoPropria, valorIcmsProprio, baseCalculoIcmsSt, valorIcmsSt);
    };
    TributacaoIcmsSt.prototype.calculaIcms = function (baseCalculo) {
        return (baseCalculo * this.tributavel.percentualIcms) / 100;
    };
    return TributacaoIcmsSt;
}());
exports.TributacaoIcmsSt = TributacaoIcmsSt;
//# sourceMappingURL=TributacaoIcmsSt.js.map