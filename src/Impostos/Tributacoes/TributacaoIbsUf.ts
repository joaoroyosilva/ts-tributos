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
      percentualEfetivo
    );

    return new ResultadoCalculoCbsIbs(
      baseCalculo,
      valor,
      valorDiferido,
      percentualEfetivo,
      valorEfetivo
    );
  }

  private calculaValorIbsUf(baseCalculo: number): number {
    return new Utils().round(
      (baseCalculo * this.tributavel.percentualIbsUf) / 100
    );
  }

  private calculaValorDiferido(baseCalculo: number): number {
    return new Utils().round(
      (baseCalculo * this.tributavel.percentualDiferimentoIbsUf) / 100
    );
  }

  private calculaAliquotaEfetiva(): number {
    if (this.tributavel.reducaoIbsUf == 0) {
      return this.tributavel.percentualIbsUf;
    }

    return new Utils().round(
      this.tributavel.percentualIbsUf * (1 - this.tributavel.reducaoIbsUf / 100)
    );
  }

  private calculaValorEfetivo(
    baseCalculo: number,
    percentualEfetivo: number
  ): number {
    return new Utils().round((baseCalculo * percentualEfetivo) / 100);
  }
}
