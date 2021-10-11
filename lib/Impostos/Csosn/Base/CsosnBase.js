"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsosnBase = void 0;
var ArgumentException_1 = require("../../../Exceptions/ArgumentException");
var OrigemMercadoria_1 = require("../../../Flags/OrigemMercadoria");
var TipoDesconto_1 = require("../../../Flags/TipoDesconto");
var CsosnBase = /** @class */ (function () {
    function CsosnBase(origemMercadoria, tipoDesconto) {
        if (origemMercadoria === void 0) { origemMercadoria = OrigemMercadoria_1.OrigemMercadoria.nacional; }
        if (tipoDesconto === void 0) { tipoDesconto = TipoDesconto_1.TipoDesconto.incondicional; }
        this.origemMercadoria = origemMercadoria;
        this.tipoDesconto = tipoDesconto;
    }
    CsosnBase.prototype.calcula = function (tributavel) {
        throw new ArgumentException_1.ArgumentException();
    };
    return CsosnBase;
}());
exports.CsosnBase = CsosnBase;
//# sourceMappingURL=CsosnBase.js.map