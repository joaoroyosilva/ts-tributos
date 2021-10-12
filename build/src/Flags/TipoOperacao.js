export var TipoOperacao;
(function (TipoOperacao) {
    TipoOperacao[TipoOperacao["operacaoInterna"] = 1] = "operacaoInterna";
    TipoOperacao[TipoOperacao["operacaoInterestadual"] = 2] = "operacaoInterestadual";
    TipoOperacao[TipoOperacao["operacaoExterior"] = 3] = "operacaoExterior";
})(TipoOperacao || (TipoOperacao = {}));
export const TipoOperacaoLabel = new Map([
    [TipoOperacao.operacaoInterna, '1 - Operação interna'],
    [TipoOperacao.operacaoInterestadual, '2 - Operação interestadual'],
    [TipoOperacao.operacaoExterior, '3 -Operação com exterior'],
]);
//# sourceMappingURL=TipoOperacao.js.map