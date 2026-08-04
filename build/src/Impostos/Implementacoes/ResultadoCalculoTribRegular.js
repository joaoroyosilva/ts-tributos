/**
 * Resultado do grupo `gTribRegular` (NT 2025.002-RTC, UB68): a tributação que valeria se a
 * condição resolutiva ou suspensiva não fosse cumprida.
 */
export class ResultadoCalculoTribRegular {
    constructor(baseCalculo = 0, percentualEfetivoRegIbsUf = 0, valorTribRegIbsUf = 0, percentualEfetivoRegIbsMun = 0, valorTribRegIbsMun = 0, percentualEfetivoRegCbs = 0, valorTribRegCbs = 0) {
        this.baseCalculo = baseCalculo;
        this.percentualEfetivoRegIbsUf = percentualEfetivoRegIbsUf;
        this.valorTribRegIbsUf = valorTribRegIbsUf;
        this.percentualEfetivoRegIbsMun = percentualEfetivoRegIbsMun;
        this.valorTribRegIbsMun = valorTribRegIbsMun;
        this.percentualEfetivoRegCbs = percentualEfetivoRegCbs;
        this.valorTribRegCbs = valorTribRegCbs;
    }
}
//# sourceMappingURL=ResultadoCalculoTribRegular.js.map