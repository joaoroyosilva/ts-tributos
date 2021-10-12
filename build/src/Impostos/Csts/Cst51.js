import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { Cst } from '../../Flags/Cst';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CstBase } from './Base/CstBase';
export class Cst51 extends CstBase {
    constructor(origemMercadoria = OrigemMercadoria.nacional, tipoDesconto = TipoDesconto.incondicional) {
        super(origemMercadoria, tipoDesconto);
        this.cst = Cst.cst51;
    }
    calcula(tributavel) {
        const facadeCalculadoraTributacao = new FacadeCalculadoraTributacao(tributavel, this.tipoDesconto);
        const resultadoCalculoIcms = facadeCalculadoraTributacao.calculaIcms();
        this.percentualReducao = tributavel.percentualReducao;
        this.valorBcIcms = resultadoCalculoIcms.baseCalculo;
        this.percentualIcms = tributavel.percentualIcms;
        this.valorIcmsOperacao = (this.valorBcIcms * this.percentualIcms) / 100;
        this.percentualDiferimento = tributavel.percentualDiferimento;
        this.valorIcmsDiferido =
            (this.percentualDiferimento * this.valorIcmsOperacao) / 100;
        this.valorIcms = this.valorIcmsOperacao - this.valorIcmsDiferido;
        const resultadoCalculoFcp = facadeCalculadoraTributacao.calculaFcp();
        this.percentualFcp = tributavel.percentualFcp;
        this.valorBcFcp = resultadoCalculoFcp.baseCalculo;
        this.valorFcp = resultadoCalculoFcp.valor;
    }
}
//# sourceMappingURL=Cst51.js.map