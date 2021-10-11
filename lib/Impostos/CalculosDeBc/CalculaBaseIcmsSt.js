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
exports.CalculaBaseIcmsSt = void 0;
var TipoDesconto_1 = require("../../Flags/TipoDesconto");
var CalculaBaseCalculoBase_1 = require("./Base/CalculaBaseCalculoBase");
var CalculaBaseIcmsSt = /** @class */ (function (_super) {
    __extends(CalculaBaseIcmsSt, _super);
    function CalculaBaseIcmsSt(tributavel, tipoDesconto) {
        var _this = _super.call(this, tributavel) || this;
        _this.tributavel = tributavel;
        _this.tipoDesconto = tipoDesconto;
        return _this;
    }
    CalculaBaseIcmsSt.prototype.calculaBaseDeCalculo = function () {
        var baseCalculo = _super.prototype.calculaBaseDeCalculo.call(this) + this.tributavel.valorIpi;
        baseCalculo =
            baseCalculo - (baseCalculo * this.tributavel.percentualReducao) / 100;
        var baseCalculoSt = this.calculaBaseDeCalculoSt(baseCalculo);
        return baseCalculoSt;
    };
    CalculaBaseIcmsSt.prototype.calculaBaseDeCalculoSt = function (baseCalculoIcms) {
        var baseCalculoSt = this.tipoDesconto === TipoDesconto_1.TipoDesconto.condicional
            ? this.calculaIcmsComDescontoCondicional(baseCalculoIcms)
            : this.calculaIcmsComDescontoIncondicional(baseCalculoIcms);
        baseCalculoSt = baseCalculoSt * (1 + this.tributavel.percentualMva / 100);
        return baseCalculoSt;
    };
    CalculaBaseIcmsSt.prototype.calculaIcmsComDescontoIncondicional = function (baseCalculoInicial) {
        var baseCalculo = baseCalculoInicial - this.tributavel.desconto;
        baseCalculo =
            baseCalculo - (baseCalculo * this.tributavel.percentualReducaoSt) / 100;
        return baseCalculo;
    };
    CalculaBaseIcmsSt.prototype.calculaIcmsComDescontoCondicional = function (baseCalculoInicial) {
        var baseCalculo = baseCalculoInicial + this.tributavel.desconto;
        baseCalculo =
            baseCalculo - (baseCalculo * this.tributavel.percentualReducaoSt) / 100;
        return baseCalculo;
    };
    return CalculaBaseIcmsSt;
}(CalculaBaseCalculoBase_1.CalculaBaseCalculoBase));
exports.CalculaBaseIcmsSt = CalculaBaseIcmsSt;
//# sourceMappingURL=CalculaBaseIcmsSt.js.map