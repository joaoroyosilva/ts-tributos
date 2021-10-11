"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CstBase = void 0;
var ArgumentException_1 = require("../../../Exceptions/ArgumentException");
var OrigemMercadoria_1 = require("../../../Flags/OrigemMercadoria");
var TipoDesconto_1 = require("../../../Flags/TipoDesconto");
var CstBase = /** @class */ (function () {
    function CstBase(origemMercadoria, tipoDesconto) {
        if (origemMercadoria === void 0) { origemMercadoria = OrigemMercadoria_1.OrigemMercadoria.nacional; }
        if (tipoDesconto === void 0) { tipoDesconto = TipoDesconto_1.TipoDesconto.incondicional; }
        this.origemMercadoria = origemMercadoria;
        this.tipoDesconto = tipoDesconto;
    }
    CstBase.prototype.calcula = function (tributavel) {
        throw new ArgumentException_1.ArgumentException();
    };
    return CstBase;
}());
exports.CstBase = CstBase;
//# sourceMappingURL=CstBase.js.map