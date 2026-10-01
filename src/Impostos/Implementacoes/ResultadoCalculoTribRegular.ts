/**
 * Resultado do grupo `gTribRegular` (NT 2025.002-RTC, UB68): a tributação que valeria se a
 * condição resolutiva ou suspensiva não fosse cumprida.
 */
export class ResultadoCalculoTribRegular {
  constructor(
    public baseCalculo: number = 0,
    public percentualEfetivoRegIbsUf: number = 0,
    public valorTribRegIbsUf: number = 0,
    public percentualEfetivoRegIbsMun: number = 0,
    public valorTribRegIbsMun: number = 0,
    public percentualEfetivoRegCbs: number = 0,
    public valorTribRegCbs: number = 0,
  ) { }
}
