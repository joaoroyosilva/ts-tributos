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
exports.Csosn900 = void 0;
var FacadeCalculadoraTributacao_1 = require("../../Facade/FacadeCalculadoraTributacao");
var CsosnBase_1 = require("./Base/CsosnBase");
var Csosn900 = /** @class */ (function (_super) {
    __extends(Csosn900, _super);
    function Csosn900() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Csosn900.prototype.calcula = function (tributavel) {
        this.calculaIcms(tributavel);
        this.calculaIcmsSt(tributavel);
        this.calculaCredito(tributavel);
    };
    Csosn900.prototype.calculaCredito = function (tributavel) {
        this.percentualCredito = tributavel.percentualCredito;
        var facade = new FacadeCalculadoraTributacao_1.FacadeCalculadoraTributacao(tributavel, this.tipoDesconto);
        var resultadoCalculoCredito = facade.calculaIcmsCredito();
        this.valorCredito = resultadoCalculoCredito.valor;
    };
    Csosn900.prototype.calculaIcmsSt = function (tributavel) {
        this.percentualMva = tributavel.percentualMva;
        this.percentualReducaoIcmsStBc = tributavel.percentualReducaoSt;
        this.percentualIcmsSt = tributavel.percentualIcmsSt;
        var facade = new FacadeCalculadoraTributacao_1.FacadeCalculadoraTributacao(tributavel, this.tipoDesconto);
        tributavel.valorIpi = facade.calculaIpi().valor;
        var resultadoCalculoIcmsSt = facade.calculaIcmsSt();
        this.valorBcIcmsSt = resultadoCalculoIcmsSt.baseCalculoIcmsSt;
        this.valorIcmsSt = resultadoCalculoIcmsSt.valorIcmsSt;
    };
    Csosn900.prototype.calculaIcms = function (tributavel) {
        this.percentualReducaoIcmsBc = tributavel.percentualReducao;
        this.percentualIcms = tributavel.percentualIcms;
        var facade = new FacadeCalculadoraTributacao_1.FacadeCalculadoraTributacao(tributavel, this.tipoDesconto);
        tributavel.valorIpi = facade.calculaIpi().valor;
        var resultadoCalculoIcms = facade.calculaIcms();
        this.valorBcIcms = resultadoCalculoIcms.baseCalculo;
        this.valorIcms = resultadoCalculoIcms.valor;
    };
    return Csosn900;
}(CsosnBase_1.CsosnBase));
exports.Csosn900 = Csosn900;
//# sourceMappingURL=Csosn900.js.map