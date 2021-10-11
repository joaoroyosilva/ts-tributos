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
exports.Cst51 = void 0;
var FacadeCalculadoraTributacao_1 = require("../../Facade/FacadeCalculadoraTributacao");
var Cst_1 = require("../../Flags/Cst");
var OrigemMercadoria_1 = require("../../Flags/OrigemMercadoria");
var TipoDesconto_1 = require("../../Flags/TipoDesconto");
var CstBase_1 = require("./Base/CstBase");
var Cst51 = /** @class */ (function (_super) {
    __extends(Cst51, _super);
    function Cst51(origemMercadoria, tipoDesconto) {
        if (origemMercadoria === void 0) { origemMercadoria = OrigemMercadoria_1.OrigemMercadoria.nacional; }
        if (tipoDesconto === void 0) { tipoDesconto = TipoDesconto_1.TipoDesconto.incondicional; }
        var _this = _super.call(this, origemMercadoria, tipoDesconto) || this;
        _this.cst = Cst_1.Cst.cst51;
        return _this;
    }
    Cst51.prototype.calcula = function (tributavel) {
        var facadeCalculadoraTributacao = new FacadeCalculadoraTributacao_1.FacadeCalculadoraTributacao(tributavel, this.tipoDesconto);
        var resultadoCalculoIcms = facadeCalculadoraTributacao.calculaIcms();
        this.percentualReducao = tributavel.percentualReducao;
        this.valorBcIcms = resultadoCalculoIcms.baseCalculo;
        this.percentualIcms = tributavel.percentualIcms;
        this.valorIcmsOperacao = (this.valorBcIcms * this.percentualIcms) / 100;
        this.percentualDiferimento = tributavel.percentualDiferimento;
        this.valorIcmsDiferido =
            (this.percentualDiferimento * this.valorIcmsOperacao) / 100;
        this.valorIcms = this.valorIcmsOperacao - this.valorIcmsDiferido;
        var resultadoCalculoFcp = facadeCalculadoraTributacao.calculaFcp();
        this.percentualFcp = tributavel.percentualFcp;
        this.valorBcFcp = resultadoCalculoFcp.baseCalculo;
        this.valorFcp = resultadoCalculoFcp.valor;
    };
    return Cst51;
}(CstBase_1.CstBase));
exports.Cst51 = Cst51;
//# sourceMappingURL=Cst51.js.map