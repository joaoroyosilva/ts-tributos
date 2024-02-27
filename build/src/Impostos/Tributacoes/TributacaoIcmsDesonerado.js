import { CalculaBaseCalculoIcms } from '../CalculosDeBc/CalculaBaseCalculoIcms';
import { TipoCalculoIcmsDesonerado } from '../../Flags/TipoCalculoIcmsDesonerado';
import { ResultadoCalculoIcmsDesonerado } from '../Implementacoes/ResultadoCalculoIcmsDesonerado';
import { Cst } from '../../Flags/Cst';
export class TributacaoIcmsDesonerado {
    constructor(tributavel, tipoDesconto, tipoCalculoIcmsDesonerado) {
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
        this.tipoCalculoIcmsDesonerado = tipoCalculoIcmsDesonerado;
        this.calculaBaseCalculoIcms = new CalculaBaseCalculoIcms(tributavel, tipoDesconto);
    }
    calcula() {
        return this.calculaIcmsDesonerado();
    }
    calculaIcmsDesonerado() {
        let subtotalProduto = this.tributavel.valorProduto * this.tributavel.quantidadeProduto;
        let baseCalculo = this.calculaBaseCalculoIcms.calculaBaseDeCalculo();
        let valorIcmsDesonerado = this.calculaDesoneracao(this.tipoCalculoIcmsDesonerado == TipoCalculoIcmsDesonerado.BaseSimples
            ? baseCalculo
            : subtotalProduto, this.tipoCalculoIcmsDesonerado);
        return new ResultadoCalculoIcmsDesonerado(subtotalProduto, valorIcmsDesonerado);
    }
    calculaDesoneracao(valorBase, tipoCalculo) {
        let aliquota = this.tributavel.percentualIcms / 100;
        if (tipoCalculo == TipoCalculoIcmsDesonerado.BaseSimples) {
            return valorBase * aliquota;
        }
        else if (tipoCalculo == TipoCalculoIcmsDesonerado.BasePorDentro) {
            if (this.tributavel.cst == Cst.cst20 ||
                this.tributavel.cst == Cst.cst70) {
                return ((valorBase *
                    (1 - aliquota * (1 - this.tributavel.percentualReducao / 100))) /
                    (1 - aliquota) -
                    valorBase);
            }
            else {
                return (valorBase / (1 - aliquota)) * aliquota;
            }
        }
        return 0;
    }
}
//# sourceMappingURL=TributacaoIcmsDesonerado.js.map