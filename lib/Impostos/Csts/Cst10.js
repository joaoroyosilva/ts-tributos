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
exports.Cst10 = void 0;
var FacadeCalculadoraTributacao_1 = require("../../Facade/FacadeCalculadoraTributacao");
var Cst_1 = require("../../Flags/Cst");
var ModalidadeDeterminacaoBcIcmsSt_1 = require("../../Flags/ModalidadeDeterminacaoBcIcmsSt");
var OrigemMercadoria_1 = require("../../Flags/OrigemMercadoria");
var TipoDesconto_1 = require("../../Flags/TipoDesconto");
var Cst00_1 = require("./Cst00");
var Cst10 = /** @class */ (function (_super) {
    __extends(Cst10, _super);
    function Cst10(origemMercadoria, tipoDesconto) {
        if (origemMercadoria === void 0) { origemMercadoria = OrigemMercadoria_1.OrigemMercadoria.nacional; }
        if (tipoDesconto === void 0) { tipoDesconto = TipoDesconto_1.TipoDesconto.incondicional; }
        var _this = _super.call(this, origemMercadoria, tipoDesconto) || this;
        _this.origemMercadoria = origemMercadoria;
        _this.tipoDesconto = tipoDesconto;
        _this.cst = Cst_1.Cst.cst10;
        _this.modalidadeDeterminacaoBcIcmsSt =
            ModalidadeDeterminacaoBcIcmsSt_1.ModalidadeDeterminacaoBcIcmsSt.margemValorAgregado;
        return _this;
    }
    Cst10.prototype.calcula = function (tributavel) {
        _super.prototype.calcula.call(this, tributavel);
        this.percentualMva = tributavel.percentualMva;
        this.percentualReducaoSt = tributavel.percentualReducaoSt;
        this.percentualIcmsSt = tributavel.percentualIcmsSt;
        this.percentualFcpSt = tributavel.percentualFcpSt;
        var facadeCalculadoraTributacao = new FacadeCalculadoraTributacao_1.FacadeCalculadoraTributacao(tributavel, this.tipoDesconto);
        tributavel.valorIpi = facadeCalculadoraTributacao.calculaIpi().valor;
        var resultadoCalculoIcmsSt = facadeCalculadoraTributacao.calculaIcmsSt();
        var resultadoCalculoFcpSt = facadeCalculadoraTributacao.calculaFcpSt();
        this.valorBcIcmsSt = resultadoCalculoIcmsSt.baseCalculoIcmsSt;
        this.valorIcmsSt = resultadoCalculoIcmsSt.valorIcmsSt;
        this.valorBcFcp = facadeCalculadoraTributacao.calculaFcp().baseCalculo;
        this.valorBcFcpSt = resultadoCalculoFcpSt.baseCalculoFcpSt;
        this.valorFcpSt = resultadoCalculoFcpSt.valorFcpSt;
    };
    return Cst10;
}(Cst00_1.Cst00));
exports.Cst10 = Cst10;
//# sourceMappingURL=Cst10.js.map