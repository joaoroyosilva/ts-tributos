"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultadoCalculoDifal = void 0;
var ResultadoCalculoDifal = /** @class */ (function () {
    function ResultadoCalculoDifal(baseCalculo, difal, fcp, valorIcmsDestino, valorIcmsOrigem) {
        this.baseCalculo = baseCalculo;
        this.difal = difal;
        this.fcp = fcp;
        this.valorIcmsDestino = valorIcmsDestino;
        this.valorIcmsOrigem = valorIcmsOrigem;
    }
    ResultadoCalculoDifal.prototype.getObservacao = function (dadosMensagemDifal) {
        return ResultadoCalculoDifal.montaMensageDifal(dadosMensagemDifal);
    };
    ResultadoCalculoDifal.getObservacaoDifal = function (dadosMensagemDifal) {
        return ResultadoCalculoDifal.montaMensageDifal(dadosMensagemDifal);
    };
    ResultadoCalculoDifal.montaMensageDifal = function (dadosMensagemDifal) {
        return "Valores totais do ICMS interstadual: DIFAL da UF destino " + dadosMensagemDifal.valorIcmsDestino
            .toFixed(2)
            .replace('.', ',') + " + FCP " + dadosMensagemDifal.fcp
            .toFixed(2)
            .replace('.', ',') + "; DIFAL da UF Origem " + dadosMensagemDifal.valorIcmsOrigem
            .toFixed(2)
            .replace('.', ',');
    };
    return ResultadoCalculoDifal;
}());
exports.ResultadoCalculoDifal = ResultadoCalculoDifal;
//# sourceMappingURL=ResultadoCalculoDifal.js.map