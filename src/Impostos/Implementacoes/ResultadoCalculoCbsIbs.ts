export class ResultadoCalculoCbsIbs {
  constructor(
    public baseCalculo: number,
    public valor: number,
    public valorDiferido: number,
    public percentualEfetivo: number,
    public valorEfetivo: number,
    public valorCreditoPresumido: number,
  ) { }
}