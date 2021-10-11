"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TributacaoIbpt = void 0;
var ResultadoCalculoIbpt_1 = require("../Implementacoes/ResultadoCalculoIbpt");
var TributacaoIbpt = /** @class */ (function () {
    function TributacaoIbpt(tributavel, ibpt) {
        this.tributavel = tributavel;
        this.ibpt = ibpt;
    }
    TributacaoIbpt.prototype.calcula = function () {
        var baseCalculo = this.tributavel.valorProduto * this.tributavel.quantidadeProduto -
            this.tributavel.desconto;
        var impostoAproximadoFederal = (baseCalculo * this.ibpt.percentualFederal) / 100;
        var impostoAproximadoMunicipal = (baseCalculo * this.ibpt.percentualMunicipal) / 100;
        var impostoAproximadoEstadual = (baseCalculo * this.ibpt.percentualEstadual) / 100;
        var impostoAproximadoImportado = (baseCalculo * this.ibpt.percentualFederalImportados) / 100;
        return new ResultadoCalculoIbpt_1.ResultadoCalculoIbpt(impostoAproximadoFederal, impostoAproximadoMunicipal, impostoAproximadoEstadual, impostoAproximadoImportado, baseCalculo);
    };
    return TributacaoIbpt;
}());
exports.TributacaoIbpt = TributacaoIbpt;
//# sourceMappingURL=TributacaoIbpt.js.map