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
exports.Cst00 = void 0;
var FacadeCalculadoraTributacao_1 = require("../../Facade/FacadeCalculadoraTributacao");
var Cst_1 = require("../../Flags/Cst");
var OrigemMercadoria_1 = require("../../Flags/OrigemMercadoria");
var TipoDesconto_1 = require("../../Flags/TipoDesconto");
var CstBase_1 = require("./Base/CstBase");
var Cst00 = /** @class */ (function (_super) {
    __extends(Cst00, _super);
    function Cst00(origemMercadoria, tipoDesconto) {
        if (origemMercadoria === void 0) { origemMercadoria = OrigemMercadoria_1.OrigemMercadoria.nacional; }
        if (tipoDesconto === void 0) { tipoDesconto = TipoDesconto_1.TipoDesconto.incondicional; }
        var _this = _super.call(this, origemMercadoria, tipoDesconto) || this;
        _this.origemMercadoria = origemMercadoria;
        _this.tipoDesconto = tipoDesconto;
        _this.cst = Cst_1.Cst.cst00;
        return _this;
    }
    Cst00.prototype.calcula = function (tributavel) {
        var facadeCalculadoraTributacao = new FacadeCalculadoraTributacao_1.FacadeCalculadoraTributacao(tributavel, this.tipoDesconto);
        var resultadoCalculoIcms = facadeCalculadoraTributacao.calculaIcms();
        var resultacoCalculoFcp = facadeCalculadoraTributacao.calculaFcp();
        this.valorBcIcms = resultadoCalculoIcms.baseCalculo;
        this.percentualIcms = tributavel.percentualIcms;
        this.valorIcms = resultadoCalculoIcms.valor;
        this.percentualFcp = tributavel.percentualFcp;
        this.valorFcfp = resultacoCalculoFcp.valor;
    };
    return Cst00;
}(CstBase_1.CstBase));
exports.Cst00 = Cst00;
//# sourceMappingURL=Cst00.js.map