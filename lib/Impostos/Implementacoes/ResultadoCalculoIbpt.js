"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultadoCalculoIbpt = void 0;
var ResultadoCalculoIbpt = /** @class */ (function () {
    function ResultadoCalculoIbpt(impostoAproximadoFederal, impostoAproximadoMunipio, impostoAproximadoEstadual, impostoAproximadoImportados, baseCalculo) {
        this.impostoAproximadoFederal = impostoAproximadoFederal;
        this.impostoAproximadoMunipio = impostoAproximadoMunipio;
        this.impostoAproximadoEstadual = impostoAproximadoEstadual;
        this.impostoAproximadoImportados = impostoAproximadoImportados;
        this.baseCalculo = baseCalculo;
        this.tributacaoFederal = impostoAproximadoFederal;
        this.tributacaoFederalImportados = impostoAproximadoImportados;
        this.tributacaoEstadual = impostoAproximadoEstadual;
        this.tributacaoMunicipal = impostoAproximadoMunipio;
        this.valorTotalTributos =
            impostoAproximadoFederal +
                impostoAproximadoMunipio +
                impostoAproximadoEstadual +
                impostoAproximadoImportados;
    }
    return ResultadoCalculoIbpt;
}());
exports.ResultadoCalculoIbpt = ResultadoCalculoIbpt;
//# sourceMappingURL=ResultadoCalculoIbpt.js.map