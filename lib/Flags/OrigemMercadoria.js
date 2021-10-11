"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrigemMercadoriaLabel = exports.OrigemMercadoria = void 0;
var OrigemMercadoria;
(function (OrigemMercadoria) {
    OrigemMercadoria[OrigemMercadoria["nacional"] = 0] = "nacional";
    OrigemMercadoria[OrigemMercadoria["estrangeiraImportacaoDireta"] = 1] = "estrangeiraImportacaoDireta";
    OrigemMercadoria[OrigemMercadoria["estrangeiraInterna"] = 2] = "estrangeiraInterna";
    OrigemMercadoria[OrigemMercadoria["nacionalImportacaoSuperior40"] = 3] = "nacionalImportacaoSuperior40";
    OrigemMercadoria[OrigemMercadoria["nacionalConformidadeBasicas"] = 4] = "nacionalConformidadeBasicas";
    OrigemMercadoria[OrigemMercadoria["nacionalImportacaoInferior40"] = 5] = "nacionalImportacaoInferior40";
    OrigemMercadoria[OrigemMercadoria["estrangeiraImportacaoDiretaSemSimilar"] = 6] = "estrangeiraImportacaoDiretaSemSimilar";
    OrigemMercadoria[OrigemMercadoria["estrangeiraInternaSemSimiliar"] = 7] = "estrangeiraInternaSemSimiliar";
    OrigemMercadoria[OrigemMercadoria["nacionalImportacaoSuperior70"] = 8] = "nacionalImportacaoSuperior70";
})(OrigemMercadoria = exports.OrigemMercadoria || (exports.OrigemMercadoria = {}));
exports.OrigemMercadoriaLabel = new Map([
    [OrigemMercadoria.nacional, 'Nacional'],
    [
        OrigemMercadoria.estrangeiraImportacaoDireta,
        'Estrangeira Importação Direta',
    ],
    [OrigemMercadoria.estrangeiraInterna, 'Estrangeira Interna'],
    [
        OrigemMercadoria.nacionalImportacaoSuperior40,
        'Nacional Importação Inferior 40',
    ],
    [
        OrigemMercadoria.nacionalConformidadeBasicas,
        'Nacional Confirmidade Básicas',
    ],
    [
        OrigemMercadoria.nacionalImportacaoInferior40,
        'Nacional Importação Inferior 40',
    ],
    [
        OrigemMercadoria.estrangeiraImportacaoDiretaSemSimilar,
        'Estrangeira Importação Direta Sem Similar',
    ],
    [
        OrigemMercadoria.estrangeiraInternaSemSimiliar,
        'Estrangeira Interna Sem Similar',
    ],
    [
        OrigemMercadoria.nacionalImportacaoSuperior70,
        'Nacional Importação Superior 70',
    ],
]);
//# sourceMappingURL=OrigemMercadoria.js.map