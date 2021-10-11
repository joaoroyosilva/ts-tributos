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
exports.Csosn201 = void 0;
var FacadeCalculadoraTributacao_1 = require("../../Facade/FacadeCalculadoraTributacao");
var Csosn_1 = require("../../Flags/Csosn");
var OrigemMercadoria_1 = require("../../Flags/OrigemMercadoria");
var TipoDesconto_1 = require("../../Flags/TipoDesconto");
var Csosn101_1 = require("./Csosn101");
var Csosn201 = /** @class */ (function (_super) {
    __extends(Csosn201, _super);
    function Csosn201(origemMercadoria, tipoDesconto) {
        if (origemMercadoria === void 0) { origemMercadoria = OrigemMercadoria_1.OrigemMercadoria.nacional; }
        if (tipoDesconto === void 0) { tipoDesconto = TipoDesconto_1.TipoDesconto.incondicional; }
        var _this = _super.call(this, origemMercadoria, tipoDesconto) || this;
        _this.origemMercadoria = origemMercadoria;
        _this.tipoDesconto = tipoDesconto;
        _this.csosn = Csosn_1.Csosn.csosn201;
        return _this;
    }
    Csosn201.prototype.calcula = function (tributavel) {
        _super.prototype.calcula.call(this, tributavel);
        this.percentualMva = tributavel.percentualMva;
        this.percentualReducaoSt = tributavel.percentualReducaoSt;
        this.percentualIcmsSt = tributavel.percentualIcmsSt;
        var facade = new FacadeCalculadoraTributacao_1.FacadeCalculadoraTributacao(tributavel, this.tipoDesconto);
        tributavel.valorIpi = facade.calculaIpi().valor;
        var resultadoCalculoIcmsSt = facade.calculaIcmsSt();
        this.valorBcIcmsSt = resultadoCalculoIcmsSt.baseCalculoIcmsSt;
        this.valorIcmsSt = resultadoCalculoIcmsSt.valorIcmsSt;
    };
    return Csosn201;
}(Csosn101_1.Csosn101));
exports.Csosn201 = Csosn201;
//# sourceMappingURL=Csosn201.js.map