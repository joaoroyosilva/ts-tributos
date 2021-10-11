"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoContribuinteLabel = exports.TipoContribuinte = void 0;
var TipoContribuinte;
(function (TipoContribuinte) {
    TipoContribuinte[TipoContribuinte["contribuinte"] = 1] = "contribuinte";
    TipoContribuinte[TipoContribuinte["isento"] = 2] = "isento";
    TipoContribuinte[TipoContribuinte["naoContribuinte"] = 3] = "naoContribuinte";
})(TipoContribuinte = exports.TipoContribuinte || (exports.TipoContribuinte = {}));
exports.TipoContribuinteLabel = new Map([
    [TipoContribuinte.contribuinte, '1 - Contribuinte de ICMS.'],
    [TipoContribuinte.isento, '2 - Contribuinte isento.'],
    [TipoContribuinte.naoContribuinte, '9 - Não Contribuinte.'],
]);
//# sourceMappingURL=TipoContribuinte.js.map