"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultadoCalculoIssqn = void 0;
var ResultadoCalculoIssqn = /** @class */ (function () {
    function ResultadoCalculoIssqn(baseCalculo, valor, baseCalculoInss, baseCalculoIrrf, valorRetPis, valorRetCofins, valorRetCsll, valorRetIrrf, valorRetInss) {
        if (baseCalculoInss === void 0) { baseCalculoInss = 0; }
        if (baseCalculoIrrf === void 0) { baseCalculoIrrf = 0; }
        if (valorRetPis === void 0) { valorRetPis = 0; }
        if (valorRetCofins === void 0) { valorRetCofins = 0; }
        if (valorRetCsll === void 0) { valorRetCsll = 0; }
        if (valorRetIrrf === void 0) { valorRetIrrf = 0; }
        if (valorRetInss === void 0) { valorRetInss = 0; }
        this.baseCalculo = baseCalculo;
        this.valor = valor;
        this.baseCalculoInss = baseCalculoInss;
        this.baseCalculoIrrf = baseCalculoIrrf;
        this.valorRetPis = valorRetPis;
        this.valorRetCofins = valorRetCofins;
        this.valorRetCsll = valorRetCsll;
        this.valorRetIrrf = valorRetIrrf;
        this.valorRetInss = valorRetInss;
    }
    return ResultadoCalculoIssqn;
}());
exports.ResultadoCalculoIssqn = ResultadoCalculoIssqn;
//# sourceMappingURL=ResultadoCalculoIssqn.js.map