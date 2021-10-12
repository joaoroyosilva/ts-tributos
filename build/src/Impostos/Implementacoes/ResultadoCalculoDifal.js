export class ResultadoCalculoDifal {
    constructor(baseCalculo, difal, fcp, valorIcmsDestino, valorIcmsOrigem) {
        this.baseCalculo = baseCalculo;
        this.difal = difal;
        this.fcp = fcp;
        this.valorIcmsDestino = valorIcmsDestino;
        this.valorIcmsOrigem = valorIcmsOrigem;
    }
    getObservacao(dadosMensagemDifal) {
        return ResultadoCalculoDifal.montaMensageDifal(dadosMensagemDifal);
    }
    static getObservacaoDifal(dadosMensagemDifal) {
        return ResultadoCalculoDifal.montaMensageDifal(dadosMensagemDifal);
    }
    static montaMensageDifal(dadosMensagemDifal) {
        return `Valores totais do ICMS interstadual: DIFAL da UF destino ${dadosMensagemDifal.valorIcmsDestino
            .toFixed(2)
            .replace('.', ',')} + FCP ${dadosMensagemDifal.fcp
            .toFixed(2)
            .replace('.', ',')}; DIFAL da UF Origem ${dadosMensagemDifal.valorIcmsOrigem
            .toFixed(2)
            .replace('.', ',')}`;
    }
}
//# sourceMappingURL=ResultadoCalculoDifal.js.map