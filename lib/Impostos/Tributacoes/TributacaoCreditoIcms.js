"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TributacaoCreditoIcms = void 0;
var ArgumentException_1 = require("../../Exceptions/ArgumentException");
var FacadeCalculadoraTributacao_1 = require("../../Facade/FacadeCalculadoraTributacao");
var Documento_1 = require("../../Flags/Documento");
var CalculaBaseCalculoIcms_1 = require("../CalculosDeBc/CalculaBaseCalculoIcms");
var ResultadoCalculoCredito_1 = require("../Implementacoes/ResultadoCalculoCredito");
var TributacaoCreditoIcms = /** @class */ (function () {
    function TributacaoCreditoIcms(tributavel, tipoDesconto) {
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
        this.calculaBaseCalculoIcms = new CalculaBaseCalculoIcms_1.CalculaBaseCalculoIcms(tributavel, tipoDesconto);
    }
    TributacaoCreditoIcms.prototype.calcula = function () {
        return this.calculaIcmsCredito();
    };
    TributacaoCreditoIcms.prototype.calculaIcmsCredito = function () {
        var baseCalculo = this.calculaBaseCalculoIcms.calculaBaseDeCalculo();
        var valorCredito = this.calculaCredito(baseCalculo);
        return new ResultadoCalculoCredito_1.ResultadoCalculoCredito(baseCalculo, valorCredito);
    };
    TributacaoCreditoIcms.prototype.calculaCredito = function (baseCalculo) {
        switch (this.tributavel.documento) {
            case Documento_1.Documento.MFe:
            case Documento_1.Documento.SAT:
            case Documento_1.Documento.MDFe:
            case Documento_1.Documento.NFCe:
            case Documento_1.Documento.CTeOs:
            case Documento_1.Documento.NFe:
                return (baseCalculo * this.tributavel.percentualCredito) / 100;
            case Documento_1.Documento.CTe:
                var resultadoIcms = new FacadeCalculadoraTributacao_1.FacadeCalculadoraTributacao(this.tributavel, this.tipoDesconto).calculaIcmsSt();
                return ((resultadoIcms.valorIcmsSt * this.tributavel.percentualCredito) / 100);
            default:
                throw new ArgumentException_1.ArgumentException();
        }
    };
    return TributacaoCreditoIcms;
}());
exports.TributacaoCreditoIcms = TributacaoCreditoIcms;
//# sourceMappingURL=TributacaoCreditoIcms.js.map