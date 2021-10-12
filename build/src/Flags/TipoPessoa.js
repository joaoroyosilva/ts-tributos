export var TipoPessoa;
(function (TipoPessoa) {
    TipoPessoa[TipoPessoa["fisica"] = 0] = "fisica";
    TipoPessoa[TipoPessoa["juridica"] = 1] = "juridica";
})(TipoPessoa || (TipoPessoa = {}));
export const TipoPessoaLabel = new Map([
    [TipoPessoa.fisica, 'Física'],
    [TipoPessoa.juridica, 'Jurídica'],
]);
//# sourceMappingURL=TipoPessoa.js.map