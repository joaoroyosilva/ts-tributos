import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { Cst } from '../../Flags/Cst';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CstBase } from './Base/CstBase';
export class Cst00 extends CstBase {
    constructor(origemMercadoria = OrigemMercadoria.nacional, tipoDesconto = TipoDesconto.incondicional) {
        super(origemMercadoria, tipoDesconto);
        this.origemMercadoria = origemMercadoria;
        this.tipoDesconto = tipoDesconto;
        this.cst = Cst.cst00;
    }
    calcula(tributavel) {
        const facadeCalculadoraTributacao = new FacadeCalculadoraTributacao(tributavel, this.tipoDesconto);
        const resultadoCalculoIcms = facadeCalculadoraTributacao.calculaIcms();
        const resultacoCalculoFcp = facadeCalculadoraTributacao.calculaFcp();
        this.valorBcIcms = resultadoCalculoIcms.baseCalculo;
        this.percentualIcms = tributavel.percentualIcms;
        this.valorIcms = resultadoCalculoIcms.valor;
        this.percentualFcp = tributavel.percentualFcp;
        this.valorFcp = resultacoCalculoFcp.valor;
    }
}
//# sourceMappingURL=Cst00.js.map