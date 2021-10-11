"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TributacaoFcpSt = void 0;
var CalculaBaseIcmsSt_1 = require("../CalculosDeBc/CalculaBaseIcmsSt");
var ResultadoCalculoFcpSt_1 = require("../Implementacoes/ResultadoCalculoFcpSt");
var TributacaoFcpSt = /** @class */ (function () {
    function TributacaoFcpSt(tributavel, tipoDesconto) {
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
        this.calculaBaseIcmsSt = new CalculaBaseIcmsSt_1.CalculaBaseIcmsSt(tributavel, tipoDesconto);
    }
    TributacaoFcpSt.prototype.calcula = function () {
        return this.calculaFcpSt();
    };
    TributacaoFcpSt.prototype.calculaFcpSt = function () {
        var baseCalculo = this.calculaBaseIcmsSt.calculaBaseDeCalculo();
        var fcp = baseCalculo * (this.tributavel.percentualFcpSt / 100);
        return new ResultadoCalculoFcpSt_1.ResultadoCalculoFcpSt(baseCalculo, fcp);
    };
    return TributacaoFcpSt;
}());
exports.TributacaoFcpSt = TributacaoFcpSt;
//# sourceMappingURL=TributacaoFcpSt.js.map