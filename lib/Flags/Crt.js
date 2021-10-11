"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrtLabel = exports.Crt = void 0;
var Crt;
(function (Crt) {
    Crt[Crt["simplesNacional"] = 1] = "simplesNacional";
    Crt[Crt["simplesNacionalExcesso"] = 2] = "simplesNacionalExcesso";
    Crt[Crt["regimeNormal"] = 3] = "regimeNormal";
})(Crt = exports.Crt || (exports.Crt = {}));
exports.CrtLabel = new Map([
    [Crt.simplesNacional, '1 - Simples Nacional'],
    [
        Crt.simplesNacionalExcesso,
        '2 - Simples Nacional 0 Execsso de Sublimite de Receita Bruta',
    ],
    [Crt.regimeNormal, '3 - Regime Normal'],
]);
//# sourceMappingURL=Crt.js.map