"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoOperacaoLabel = exports.TipoOperacao = void 0;
var TipoOperacao;
(function (TipoOperacao) {
    TipoOperacao[TipoOperacao["operacaoInterna"] = 1] = "operacaoInterna";
    TipoOperacao[TipoOperacao["operacaoInterestadual"] = 2] = "operacaoInterestadual";
    TipoOperacao[TipoOperacao["operacaoExterior"] = 3] = "operacaoExterior";
})(TipoOperacao = exports.TipoOperacao || (exports.TipoOperacao = {}));
exports.TipoOperacaoLabel = new Map([
    [TipoOperacao.operacaoInterna, '1 - Operação interna'],
    [TipoOperacao.operacaoInterestadual, '2 - Operação interestadual'],
    [TipoOperacao.operacaoExterior, '3 -Operação com exterior'],
]);
//# sourceMappingURL=TipoOperacao.js.map