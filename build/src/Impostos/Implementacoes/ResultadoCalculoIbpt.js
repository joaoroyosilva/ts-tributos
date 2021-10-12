export class ResultadoCalculoIbpt {
    constructor(impostoAproximadoFederal, impostoAproximadoMunipio, impostoAproximadoEstadual, impostoAproximadoImportados, baseCalculo) {
        this.impostoAproximadoFederal = impostoAproximadoFederal;
        this.impostoAproximadoMunipio = impostoAproximadoMunipio;
        this.impostoAproximadoEstadual = impostoAproximadoEstadual;
        this.impostoAproximadoImportados = impostoAproximadoImportados;
        this.baseCalculo = baseCalculo;
        this.tributacaoFederal = impostoAproximadoFederal;
        this.tributacaoFederalImportados = impostoAproximadoImportados;
        this.tributacaoEstadual = impostoAproximadoEstadual;
        this.tributacaoMunicipal = impostoAproximadoMunipio;
        this.valorTotalTributos =
            impostoAproximadoFederal +
                impostoAproximadoMunipio +
                impostoAproximadoEstadual +
                impostoAproximadoImportados;
    }
}
//# sourceMappingURL=ResultadoCalculoIbpt.js.map