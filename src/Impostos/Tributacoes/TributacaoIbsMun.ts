import { Utils } from "../../utils/Utils";
import { CalculaBaseCalculoCbsIbs } from "../CalculosDeBc/CalculaBaseCalculoCbsIbs";
import { ResultadoCalculoCbsIbs } from "../Implementacoes/ResultadoCalculoCbsIbs";
import { ResultadoTributacao } from "../Implementacoes/ResultadoTributacao";
import { ITributavel } from "../ITributavel";

export class TributacaoIbsMun {
  calculaBaseCalculo: CalculaBaseCalculoCbsIbs;

  constructor(
    private tributavel: ITributavel,
    private resultadoTributacao: ResultadoTributacao
  ) {
    this.calculaBaseCalculo = new CalculaBaseCalculoCbsIbs(this.tributavel, this.resultadoTributacao);
  }

  public calcula(): ResultadoCalculoCbsIbs {
    return this.calculaCbsIbs();
  }

  private calculaCbsIbs(): ResultadoCalculoCbsIbs {
    const baseCalculo = this.calculaBaseCalculo.calculaBaseCalculoBase();
    const valor = this.calculaValorIbsMun(baseCalculo);
    const valorDiferido = this.calculaValorDiferido(baseCalculo);
    const percentualEfetivo = this.calculaAliquotaEfetiva();
    const valorEfetivo = this.calculaValorEfetivo(baseCalculo, percentualEfetivo);

    return new ResultadoCalculoCbsIbs(
      baseCalculo,
      valor,
      valorDiferido,
      percentualEfetivo,
      valorEfetivo
    );
  }

  private calculaValorIbsMun(baseCalculo: number): number {
    return new Utils().round(
      (baseCalculo * this.tributavel.percentualIbsMun) / 100);
  }

  private calculaValorDiferido(baseCalculo: number): number {
    return new Utils().round(
      (baseCalculo * this.tributavel.percentualDiferimentoIbsMun) / 100);
  }

  private calculaAliquotaEfetiva(): number {
    if (this.tributavel.reducaoIbsMun == 0) {
      return 0;
    }

    return new Utils().round(
      this.tributavel.percentualIbsMun / (1 - this.tributavel.reducaoIbsMun / 100));
  }

  private calculaValorEfetivo(baseCalculo: number, percentualEfetivo: number): number {
    return new Utils().round((baseCalculo * percentualEfetivo) / 100);
  }
}