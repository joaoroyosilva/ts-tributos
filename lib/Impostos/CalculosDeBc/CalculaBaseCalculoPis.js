"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculaBaseCalculoPis = void 0;
var TipoDesconto_1 = require("../../Flags/TipoDesconto");
var CalculaBaseCalculoBase_1 = require("./Base/CalculaBaseCalculoBase");
var CalculaBaseCalculoPis = /** @class */ (function (_super) {
    __extends(CalculaBaseCalculoPis, _super);
    function CalculaBaseCalculoPis(tributavel, tipoDesconto) {
        var _this = _super.call(this, tributavel) || this;
        _this.tributavel = tributavel;
        _this.tipoDesconto = tipoDesconto;
        return _this;
    }
    CalculaBaseCalculoPis.prototype.calculaBaseDeCalculo = function () {
        var baseCalculo = _super.prototype.calculaBaseDeCalculo.call(this);
        return this.tipoDesconto === TipoDesconto_1.TipoDesconto.condicional
            ? this.calculaIcmsComDescontoCondicional(baseCalculo)
            : this.calculaIcmsComDescontoIncondicional(baseCalculo);
    };
    CalculaBaseCalculoPis.prototype.calculaIcmsComDescontoIncondicional = function (baseCalculoInicial) {
        var baseCalculo = baseCalculoInicial - this.tributavel.desconto;
        return baseCalculo;
    };
    CalculaBaseCalculoPis.prototype.calculaIcmsComDescontoCondicional = function (baseCalculoInicial) {
        var baseCalculo = baseCalculoInicial + this.tributavel.desconto;
        return baseCalculo;
    };
    return CalculaBaseCalculoPis;
}(CalculaBaseCalculoBase_1.CalculaBaseCalculoBase));
exports.CalculaBaseCalculoPis = CalculaBaseCalculoPis;
//# sourceMappingURL=CalculaBaseCalculoPis.js.map