export class CalculaBaseCalculoBase {
    constructor(tributavel) {
        this.tributavel = tributavel;
    }
    calculaBaseDeCalculo() {
        const baseCalculo = this.tributavel.valorProduto * this.tributavel.quantidadeProduto +
            this.tributavel.frete +
            this.tributavel.seguro +
            this.tributavel.outrasDespesas;
        return baseCalculo;
    }
}
//# sourceMappingURL=CalculaBaseCalculoBase.js.map