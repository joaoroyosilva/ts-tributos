import { Utils } from '../../utils/Utils';
import { ResultadoTributacao } from '../Implementacoes/ResultadoTributacao';
import { ITributavel } from '../ITributavel';
import { CalculaBaseCalculoBase } from './Base/CalculaBaseCalculoBase';

export class CalculaBaseCalculoCbsIbs extends CalculaBaseCalculoBase {
  constructor(
    protected tributavel: ITributavel,
    protected resultadoTributacao: ResultadoTributacao
  ) {
    super(tributavel);
  }

  public calculaBaseCalculoBase(): number {
    let baseCalculo =
      this.tributavel.valorProduto * this.tributavel.quantidadeProduto +
      this.tributavel.frete +
      this.tributavel.seguro +
      this.tributavel.outrasDespesas -
      this.tributavel.desconto -
      this.resultadoTributacao.valorIcms -
      this.resultadoTributacao.valorIss -
      this.resultadoTributacao.valorPis -
      this.resultadoTributacao.valorCofins -
      this.resultadoTributacao.fcp;

    // Meio-par, como o `PHP_ROUND_HALF_EVEN` da php-tributos.
    return new Utils().roundHalfEven(baseCalculo);
  }
}
