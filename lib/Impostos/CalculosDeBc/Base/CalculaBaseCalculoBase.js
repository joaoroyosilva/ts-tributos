"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculaBaseCalculoBase = void 0;
var CalculaBaseCalculoBase = /** @class */ (function () {
    function CalculaBaseCalculoBase(tributavel) {
        this.tributavel = tributavel;
    }
    CalculaBaseCalculoBase.prototype.calculaBaseDeCalculo = function () {
        var baseCalculo = this.tributavel.valorProduto * this.tributavel.quantidadeProduto +
            this.tributavel.frete +
            this.tributavel.seguro +
            this.tributavel.outrasDespesas;
        return baseCalculo;
    };
    return CalculaBaseCalculoBase;
}());
exports.CalculaBaseCalculoBase = CalculaBaseCalculoBase;
//# sourceMappingURL=CalculaBaseCalculoBase.js.map