import { Utils } from '../../utils/Utils';
import { CalculaBaseCalculoCbsIbs } from '../CalculosDeBc/CalculaBaseCalculoCbsIbs';
import { ResultadoCalculoCbsIbs } from '../Implementacoes/ResultadoCalculoCbsIbs';
import { ResultadoTributacao } from '../Implementacoes/ResultadoTributacao';
import { ITributavel } from '../ITributavel';

export class TributacaoIbsUf {
  calculaBaseCalculo: CalculaBaseCalculoCbsIbs;

  constructor(
    private tributavel: ITributavel,
    private resultadoTributacao: ResultadoTributacao
  ) {
    this.calculaBaseCalculo = new CalculaBaseCalculoCbsIbs(
      this.tributavel,
      this.resultadoTributacao
    );
  }

  public calcula(): ResultadoCalculoCbsIbs {
    return this.calculaCbsIbs();
  }

  private calculaCbsIbs(): ResultadoCalculoCbsIbs {
    const baseCalculo = this.calculaBaseCalculo.calculaBaseCalculoBase();
    const valor = this.calculaValorIbsUf(baseCalculo);
    const percentualEfetivo = this.calculaAliquotaEfetiva();
    const valorDiferido = this.calculaValorDiferido(baseCalculo);
    const valorEfetivo = this.calculaValorEfetivo(
      baseCalculo,
      percentualEfetivo,
      valorDiferido
    );
    const valorCreditoPresumido = this.calculaValorCreditoPresumido(valorEfetivo);

    return new ResultadoCalculoCbsIbs(
      baseCalculo,
      valor,
      valorDiferido,
      percentualEfetivo,
      valorEfetivo,
      valorCreditoPresumido
    );
  }

  private calculaValorIbsUf(baseCalculo: number): number {
    return new Utils().round(
      (baseCalculo * this.tributavel.percentualIbsUf) / 100
    );
  }

  private calculaValorDiferido(baseCalculo: number): number {
    if (this.tributavel.percentualDiferimentoIbsUf == 0) {
      return 0;
    }

    return new Utils().round(
      baseCalculo
      * (1 - this.tributavel.percentualIbsUf / 100)
      * (1 - this.tributavel.percentualDiferimentoIbsUf / 100)
    );
  }

  private calculaValorCreditoPresumido(valorEfetivo: number): number {
    return new Utils().round(
      (valorEfetivo * this.tributavel.percentualCreditoPresumidoIbs) / 100
    );
  }

  private calculaAliquotaEfetiva(): number {
    if (this.tributavel.reducaoIbsUf == 0 && this.tributavel.percentualRedutorCompraGov == 0) {
      return this.tributavel.percentualIbsUf;
    }

    if (this.tributavel.percentualRedutorCompraGov > 0) {
      return new Utils().round(
        this.tributavel.percentualIbsUf
        * (1 - this.tributavel.reducaoIbsUf / 100)
        * (1 - this.tributavel.percentualRedutorCompraGov / 100)
      );
    }
    return new Utils().round(
      this.tributavel.percentualIbsUf * (1 - this.tributavel.reducaoIbsUf / 100)
    );
  }

  private calculaValorEfetivo(
    baseCalculo: number,
    percentualEfetivo: number,
    valorDiferido: number
  ): number {
    return new Utils().round(((baseCalculo * percentualEfetivo) / 100) - valorDiferido);
  }
}
