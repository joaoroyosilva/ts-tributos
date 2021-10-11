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
exports.CalculaBaseCalculoIcms = void 0;
var TipoDesconto_1 = require("../../Flags/TipoDesconto");
var CalculaBaseCalculoBase_1 = require("./Base/CalculaBaseCalculoBase");
var CalculaBaseCalculoIcms = /** @class */ (function (_super) {
    __extends(CalculaBaseCalculoIcms, _super);
    function CalculaBaseCalculoIcms(tributavel, tipoDesconto) {
        var _this = _super.call(this, tributavel) || this;
        _this.tributavel = tributavel;
        _this.tipoDesconto = tipoDesconto;
        return _this;
    }
    CalculaBaseCalculoIcms.prototype.calculaBaseDeCalculo = function () {
        var baseCalculo = _super.prototype.calculaBaseDeCalculo.call(this) + this.tributavel.valorIpi;
        return this.tipoDesconto === TipoDesconto_1.TipoDesconto.condicional
            ? this.calculaIcmsComDescontoCondicional(baseCalculo)
            : this.calculaIcmsComDescontoIncondicional(baseCalculo);
    };
    CalculaBaseCalculoIcms.prototype.calculaIcmsComDescontoIncondicional = function (baseCalculoInicial) {
        var baseCalculo = baseCalculoInicial - this.tributavel.desconto;
        baseCalculo =
            baseCalculo - (baseCalculo * this.tributavel.percentualReducao) / 100;
        return baseCalculo;
    };
    CalculaBaseCalculoIcms.prototype.calculaIcmsComDescontoCondicional = function (baseCalculoInicial) {
        var baseCalculo = baseCalculoInicial + this.tributavel.desconto;
        baseCalculo =
            baseCalculo - (baseCalculo * this.tributavel.percentualReducao) / 100;
        return baseCalculo;
    };
    return CalculaBaseCalculoIcms;
}(CalculaBaseCalculoBase_1.CalculaBaseCalculoBase));
exports.CalculaBaseCalculoIcms = CalculaBaseCalculoIcms;
//# sourceMappingURL=CalculaBaseCalculoIcms.js.map