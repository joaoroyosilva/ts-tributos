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
exports.Cst90 = void 0;
var ArgumentException_1 = require("../../Exceptions/ArgumentException");
var FacadeCalculadoraTributacao_1 = require("../../Facade/FacadeCalculadoraTributacao");
var Cst_1 = require("../../Flags/Cst");
var Documento_1 = require("../../Flags/Documento");
var OrigemMercadoria_1 = require("../../Flags/OrigemMercadoria");
var TipoDesconto_1 = require("../../Flags/TipoDesconto");
var CstBase_1 = require("./Base/CstBase");
var Cst90 = /** @class */ (function (_super) {
    __extends(Cst90, _super);
    function Cst90(origemMercadoria, tipoDesconto) {
        if (origemMercadoria === void 0) { origemMercadoria = OrigemMercadoria_1.OrigemMercadoria.nacional; }
        if (tipoDesconto === void 0) { tipoDesconto = TipoDesconto_1.TipoDesconto.incondicional; }
        var _this = _super.call(this, origemMercadoria, tipoDesconto) || this;
        _this.cst = Cst_1.Cst.cst90;
        return _this;
    }
    Cst90.prototype.calcula = function (tributavel) {
        this.calculaIcms(tributavel);
        this.calculaIcmsSt(tributavel);
        this.calculaCredito(tributavel);
        this.calculaFcp(tributavel);
        this.calculaFcpSt(tributavel);
    };
    Cst90.prototype.calculaCredito = function (tributavel) {
        this.percentualCredito = tributavel.percentualCredito;
        switch (tributavel.documento) {
            case Documento_1.Documento.MFe:
            case Documento_1.Documento.MDFe:
            case Documento_1.Documento.SAT:
            case Documento_1.Documento.NFCe:
            case Documento_1.Documento.CTeOs:
            case Documento_1.Documento.NFe:
                var facade = new FacadeCalculadoraTributacao_1.FacadeCalculadoraTributacao(tributavel, this.tipoDesconto);
                var resutladoCalculaCredito = facade.calculaIcmsCredito();
                this.valorCredito = resutladoCalculaCredito.valor;
                break;
            case Documento_1.Documento.CTe:
                var resultadoIcms = new FacadeCalculadoraTributacao_1.FacadeCalculadoraTributacao(tributavel, this.tipoDesconto).calculaIcms();
                this.valorCredito =
                    (resultadoIcms.valor * tributavel.percentualCredito) / 100;
                break;
            default:
                throw new ArgumentException_1.ArgumentException();
                break;
        }
    };
    Cst90.prototype.calculaIcmsSt = function (tributavel) {
        this.percentualMva = tributavel.percentualMva;
        this.percentualReducaoSt = tributavel.percentualReducaoSt;
        this.percentualIcmsSt = tributavel.percentualIcmsSt;
        var facade = new FacadeCalculadoraTributacao_1.FacadeCalculadoraTributacao(tributavel, this.tipoDesconto);
        tributavel.valorIpi = facade.calculaIpi().valor;
        var resultadoCalculoIcmsSt = facade.calculaIcmsSt();
        this.valorBcIcmsSt = resultadoCalculoIcmsSt.baseCalculoIcmsSt;
        this.valorIcmsSt = resultadoCalculoIcmsSt.valorIcmsSt;
    };
    Cst90.prototype.calculaIcms = function (tributavel) {
        this.percentualReducaoIcmsBc = tributavel.percentualReducao;
        this.percentualIcms = tributavel.percentualIcms;
        var facade = new FacadeCalculadoraTributacao_1.FacadeCalculadoraTributacao(tributavel, this.tipoDesconto);
        tributavel.valorIpi = facade.calculaIpi().valor;
        var resultadoCalculoIcms = facade.calculaIcms();
        this.valorBcIcms = resultadoCalculoIcms.baseCalculo;
        this.valorIcms = resultadoCalculoIcms.valor;
    };
    Cst90.prototype.calculaFcp = function (tributavel) {
        this.percentualFcp = tributavel.percentualFcp;
        var facade = new FacadeCalculadoraTributacao_1.FacadeCalculadoraTributacao(tributavel, this.tipoDesconto);
        var resultadoCalculoFcp = facade.calculaFcp();
        this.valorBcFcp = resultadoCalculoFcp.baseCalculo;
        this.valorFcp = resultadoCalculoFcp.valor;
    };
    Cst90.prototype.calculaFcpSt = function (tributavel) {
        this.percentualFcpSt = tributavel.percentualFcpSt;
        var facade = new FacadeCalculadoraTributacao_1.FacadeCalculadoraTributacao(tributavel, this.tipoDesconto);
        var resultadoCalculoFcpSt = facade.calculaFcpSt();
        this.valorBcFcpSt = resultadoCalculoFcpSt.baseCalculoFcpSt;
        this.valorFcpSt = resultadoCalculoFcpSt.valorFcpSt;
    };
    return Cst90;
}(CstBase_1.CstBase));
exports.Cst90 = Cst90;
//# sourceMappingURL=Cst90.js.map