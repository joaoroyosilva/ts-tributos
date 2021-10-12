import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { Cst } from '../../Flags/Cst';
import { ModalidadeDeterminacaoBcIcmsSt } from '../../Flags/ModalidadeDeterminacaoBcIcmsSt';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { Cst00 } from './Cst00';
export class Cst10 extends Cst00 {
    constructor(origemMercadoria = OrigemMercadoria.nacional, tipoDesconto = TipoDesconto.incondicional) {
        super(origemMercadoria, tipoDesconto);
        this.origemMercadoria = origemMercadoria;
        this.tipoDesconto = tipoDesconto;
        this.cst = Cst.cst10;
        this.modalidadeDeterminacaoBcIcmsSt =
            ModalidadeDeterminacaoBcIcmsSt.margemValorAgregado;
    }
    calcula(tributavel) {
        super.calcula(tributavel);
        this.percentualMva = tributavel.percentualMva;
        this.percentualReducaoSt = tributavel.percentualReducaoSt;
        this.percentualIcmsSt = tributavel.percentualIcmsSt;
        this.percentualFcpSt = tributavel.percentualFcpSt;
        const facadeCalculadoraTributacao = new FacadeCalculadoraTributacao(tributavel, this.tipoDesconto);
        tributavel.valorIpi = facadeCalculadoraTributacao.calculaIpi().valor;
        const resultadoCalculoIcmsSt = facadeCalculadoraTributacao.calculaIcmsSt();
        const resultadoCalculoFcpSt = facadeCalculadoraTributacao.calculaFcpSt();
        this.valorBcIcmsSt = resultadoCalculoIcmsSt.baseCalculoIcmsSt;
        this.valorIcmsSt = resultadoCalculoIcmsSt.valorIcmsSt;
        this.valorBcFcp = facadeCalculadoraTributacao.calculaFcp().baseCalculo;
        this.valorBcFcpSt = resultadoCalculoFcpSt.baseCalculoFcpSt;
        this.valorFcpSt = resultadoCalculoFcpSt.valorFcpSt;
    }
}
//# sourceMappingURL=Cst10.js.map