"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TributacaoFcp = void 0;
var CalculaBaseFcp_1 = require("../CalculosDeBc/CalculaBaseFcp");
var ResultadoCalculoFcp_1 = require("../Implementacoes/ResultadoCalculoFcp");
var TributacaoFcp = /** @class */ (function () {
    function TributacaoFcp(tributavel, tipoDesconto) {
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
        this.calculaBaseFcp = new CalculaBaseFcp_1.CalculaBaseFcp(tributavel, tipoDesconto);
    }
    TributacaoFcp.prototype.calcula = function () {
        return this.calculaFcp();
    };
    TributacaoFcp.prototype.calculaFcp = function () {
        var baseCalculo = this.calculaBaseFcp.calculaBaseDeCalculo();
        var fcp = baseCalculo * (this.tributavel.percentualFcp / 100);
        return new ResultadoCalculoFcp_1.ResultadoCalculoFcp(baseCalculo, fcp);
    };
    return TributacaoFcp;
}());
exports.TributacaoFcp = TributacaoFcp;
//# sourceMappingURL=TributacaoFcp.js.map