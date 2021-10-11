"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Csosn500 = void 0;
var Csosn_1 = require("../../Flags/Csosn");
var OrigemMercadoria_1 = require("../../Flags/OrigemMercadoria");
var TipoDesconto_1 = require("../../Flags/TipoDesconto");
var CsosnBase_1 = require("./Base/CsosnBase");
var Csosn500 = /** @class */ (function (_super) {
    __extends(Csosn500, _super);
    function Csosn500(origemMercadoria, tipoDesconto) {
        if (origemMercadoria === void 0) { origemMercadoria = OrigemMercadoria_1.OrigemMercadoria.nacional; }
        if (tipoDesconto === void 0) { tipoDesconto = TipoDesconto_1.TipoDesconto.incondicional; }
        var _this = _super.call(this, origemMercadoria, tipoDesconto) || this;
        _this.csosn = Csosn_1.Csosn.csosn500;
        return _this;
    }
    Csosn500.prototype.calcula = function (tributavel) {
        this.percentualSt =
            tributavel.percentualIcmsSt + tributavel.percentualFcpSt;
    };
    return Csosn500;
}(CsosnBase_1.CsosnBase));
exports.Csosn500 = Csosn500;
//# sourceMappingURL=Csosn500.js.map