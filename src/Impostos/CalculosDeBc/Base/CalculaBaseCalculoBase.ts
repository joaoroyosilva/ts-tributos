import { ITributavel } from '../../ITributavel';

export class CalculaBaseCalculoBase {
  constructor(protected tributavel: ITributavel) {}

  protected calculaBaseDeCalculo(): number {
    const baseCalculo =
      this.tributavel.valorProduto * this.tributavel.quantidadeProduto +
      this.tributavel.frete +
      this.tributavel.seguro +
      this.tributavel.outrasDespesas;

    return baseCalculo;
  }
}
