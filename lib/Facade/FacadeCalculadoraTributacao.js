"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacadeCalculadoraTributacao = void 0;
var TipoDesconto_1 = require("../Flags/TipoDesconto");
var TributacaoCofins_1 = require("../Impostos/Tributacoes/TributacaoCofins");
var TributacaoCreditoIcms_1 = require("../Impostos/Tributacoes/TributacaoCreditoIcms");
var TributacaoDifal_1 = require("../Impostos/Tributacoes/TributacaoDifal");
var TributacaoFcp_1 = require("../Impostos/Tributacoes/TributacaoFcp");
var TributacaoFcpSt_1 = require("../Impostos/Tributacoes/TributacaoFcpSt");
var TributacaoIbpt_1 = require("../Impostos/Tributacoes/TributacaoIbpt");
var TributacaoIcms_1 = require("../Impostos/Tributacoes/TributacaoIcms");
var TributacaoIcmsSt_1 = require("../Impostos/Tributacoes/TributacaoIcmsSt");
var TributacaoIpi_1 = require("../Impostos/Tributacoes/TributacaoIpi");
var TributacaoPis_1 = require("../Impostos/Tributacoes/TributacaoPis");
var FacadeCalculadoraTributacao = /** @class */ (function () {
    function FacadeCalculadoraTributacao(tributavel, tipoDesconto) {
        if (tipoDesconto === void 0) { tipoDesconto = TipoDesconto_1.TipoDesconto.incondicional; }
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
    }
    FacadeCalculadoraTributacao.prototype.calculaIcms = function () {
        return new TributacaoIcms_1.TributacaoIcms(this.tributavel, this.tipoDesconto).calcula();
    };
    FacadeCalculadoraTributacao.prototype.calculaIpi = function () {
        return new TributacaoIpi_1.TributacaoIpi(this.tributavel, this.tipoDesconto).calcula();
    };
    FacadeCalculadoraTributacao.prototype.calculaIcmsCredito = function () {
        return new TributacaoCreditoIcms_1.TributacaoCreditoIcms(this.tributavel, this.tipoDesconto).calcula();
    };
    FacadeCalculadoraTributacao.prototype.calculaCofins = function () {
        return new TributacaoCofins_1.TributacaoCofins(this.tributavel, this.tipoDesconto).calcula();
    };
    FacadeCalculadoraTributacao.prototype.calculaPis = function () {
        return new TributacaoPis_1.TributacaoPis(this.tributavel, this.tipoDesconto).calcula();
    };
    FacadeCalculadoraTributacao.prototype.calculaDifal = function () {
        return new TributacaoDifal_1.TributacaoDifal(this.tributavel, this.tipoDesconto).calcula();
    };
    FacadeCalculadoraTributacao.prototype.calculaIcmsSt = function () {
        return new TributacaoIcmsSt_1.TributacaoIcmsSt(this.tributavel, this.tipoDesconto).calcula();
    };
    FacadeCalculadoraTributacao.prototype.calculaIbpt = function (ibpt) {
        return new TributacaoIbpt_1.TributacaoIbpt(this.tributavel, ibpt).calcula();
    };
    FacadeCalculadoraTributacao.prototype.calculaFcp = function () {
        return new TributacaoFcp_1.TributacaoFcp(this.tributavel, this.tipoDesconto).calcula();
    };
    FacadeCalculadoraTributacao.prototype.calculaFcpSt = function () {
        return new TributacaoFcpSt_1.TributacaoFcpSt(this.tributavel, this.tipoDesconto).calcula();
    };
    return FacadeCalculadoraTributacao;
}());
exports.FacadeCalculadoraTributacao = FacadeCalculadoraTributacao;
//# sourceMappingURL=FacadeCalculadoraTributacao.js.map