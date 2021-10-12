import { ResultadoCalculoIbpt } from '../Implementacoes/ResultadoCalculoIbpt';
export class TributacaoIbpt {
    constructor(tributavel, ibpt) {
        this.tributavel = tributavel;
        this.ibpt = ibpt;
    }
    calcula() {
        const baseCalculo = this.tributavel.valorProduto * this.tributavel.quantidadeProduto -
            this.tributavel.desconto;
        const impostoAproximadoFederal = (baseCalculo * this.ibpt.percentualFederal) / 100;
        const impostoAproximadoMunicipal = (baseCalculo * this.ibpt.percentualMunicipal) / 100;
        const impostoAproximadoEstadual = (baseCalculo * this.ibpt.percentualEstadual) / 100;
        const impostoAproximadoImportado = (baseCalculo * this.ibpt.percentualFederalImportados) / 100;
        return new ResultadoCalculoIbpt(impostoAproximadoFederal, impostoAproximadoMunicipal, impostoAproximadoEstadual, impostoAproximadoImportado, baseCalculo);
    }
}
//# sourceMappingURL=TributacaoIbpt.js.map