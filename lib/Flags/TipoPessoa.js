"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoPessoaLabel = exports.TipoPessoa = void 0;
var TipoPessoa;
(function (TipoPessoa) {
    TipoPessoa[TipoPessoa["fisica"] = 0] = "fisica";
    TipoPessoa[TipoPessoa["juridica"] = 1] = "juridica";
})(TipoPessoa = exports.TipoPessoa || (exports.TipoPessoa = {}));
exports.TipoPessoaLabel = new Map([
    [TipoPessoa.fisica, 'Física'],
    [TipoPessoa.juridica, 'Jurídica'],
]);
//# sourceMappingURL=TipoPessoa.js.map