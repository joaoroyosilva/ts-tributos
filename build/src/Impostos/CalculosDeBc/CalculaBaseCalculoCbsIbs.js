import { Utils } from '../../utils/Utils';
import { CalculaBaseCalculoBase } from './Base/CalculaBaseCalculoBase';
export class CalculaBaseCalculoCbsIbs extends CalculaBaseCalculoBase {
    constructor(tributavel, resultadoTributacao) {
        super(tributavel);
        this.tributavel = tributavel;
        this.resultadoTributacao = resultadoTributacao;
    }
    calculaBaseCalculoBase() {
        let baseCalculo = this.tributavel.valorProduto * this.tributavel.quantidadeProduto +
            this.tributavel.frete +
            this.tributavel.seguro +
            this.tributavel.outrasDespesas -
            this.tributavel.desconto -
            this.resultadoTributacao.valorIcms -
            this.resultadoTributacao.valorPis -
            this.resultadoTributacao.valorCofins -
            this.resultadoTributacao.fcp;
        console.log('Base de Cálculo Cbs/Ibs:', baseCalculo);
        return new Utils().round(baseCalculo);
    }
}
//# sourceMappingURL=CalculaBaseCalculoCbsIbs.js.map