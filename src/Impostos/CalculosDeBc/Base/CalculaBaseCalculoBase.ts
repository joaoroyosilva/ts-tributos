import { ITributavel } from '../../ITributavel';

export class CalculaBaseCalculoBase {
  constructor(protected tributavel: ITributavel) {}

  protected calculaBaseDeCalculo(): number {
    return this.calculaBaseComum();
  }

  /**
   * Ponto de partida de toda base do ICMS: a base comum mais o IBS/CBS que a opção
   * `rtcNaBaseIcms` põe dentro dela (zero quando desligada). Lê a soma comum direto, e não
   * `calculaBaseDeCalculo()`, porque as subclasses sobrescrevem esse nome.
   */
  protected calculaBaseDeCalculoIcms(): number {
    return this.calculaBaseComum() + this.tributavel.valorRtcBaseIcms;
  }

  private calculaBaseComum(): number {
    const baseCalculo =
      this.tributavel.valorProduto * this.tributavel.quantidadeProduto +
      this.tributavel.frete +
      this.tributavel.seguro +
      this.tributavel.outrasDespesas;

    return baseCalculo;
  }
}
