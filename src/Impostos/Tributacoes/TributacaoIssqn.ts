import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CalculaBaseCalculoIssqn } from '../CalculosDeBc/CalculaBaseCalculoIssqn';
import { ResultadoCalculoIssqn } from '../Implementacoes/ResultadoCalculoIssqn';
import { IResultadoCalculoIssqn } from '../IResultadoCalculoIssqn';
import { ITributavel } from '../ITributavel';

export class TributacaoIssqn {
  private calculaBaseCalculoIssqn: CalculaBaseCalculoIssqn;

  constructor(
    private tributavel: ITributavel,
    private tipoDesconto: TipoDesconto
  ) {
    this.calculaBaseCalculoIssqn = new CalculaBaseCalculoIssqn(
      tributavel,
      tipoDesconto
    );
  }

  public calcula(calcularRetencoes: boolean): IResultadoCalculoIssqn {
    return this.calcularIssqn(calcularRetencoes);
  }

  private calcularIssqn(calcularRetencoes: boolean): IResultadoCalculoIssqn {
    const baseCalculo = this.calculaBaseCalculoIssqn.calculaBaseDeCalculo();
    const valorIss = this.calcularValorIssqn(baseCalculo);
    return !calcularRetencoes
      ? new ResultadoCalculoIssqn(baseCalculo, valorIss)
      : this.calcularRetencoes(baseCalculo, valorIss);
  }

  private calcularRetencoes(
    baseCalculo: number,
    valorIss: number
  ): IResultadoCalculoIssqn {
    const baseCalculoInss = baseCalculo;
    const baseCalculoIrrf = baseCalculo;
    const calcularRetencoes = this.calcularValorTotalTributacao(baseCalculo);

    const valorRetPis = calcularRetencoes
      ? this.calcularRetPis(baseCalculo)
      : 0;
    const valorRetCofins = calcularRetencoes
      ? this.calcularRetCofins(baseCalculo)
      : 0;
    const valorRetCsll = calcularRetencoes
      ? this.calcularRetCsll(baseCalculo)
      : 0;
    const valorRetIrrf = calcularRetencoes
      ? this.calcularRetIrrf(baseCalculo)
      : 0;
    const valorRetInss = calcularRetencoes
      ? this.calcularRetInss(baseCalculo)
      : 0;

    return new ResultadoCalculoIssqn(
      baseCalculo,
      valorIss,
      baseCalculoInss,
      baseCalculoIrrf,
      valorRetPis,
      valorRetCofins,
      valorRetCsll,
      valorRetInss,
      valorRetIrrf
    );
  }

  private calcularValorIssqn(baseCalculo: number): number {
    return (baseCalculo * this.tributavel.percentualIssqn) / 100;
  }

  private calcularRetPis(baseCalculo: number): number {
    return (baseCalculo * this.tributavel.percentualRetPis) / 100;
  }

  private calcularRetCofins(baseCalculo: number): number {
    return (baseCalculo * this.tributavel.percentualRetCofins) / 100;
  }

  private calcularRetCsll(baseCalculo: number): number {
    return (baseCalculo * this.tributavel.percentualRetCsll) / 100;
  }

  private calcularRetIrrf(baseCalculo: number): number {
    return (baseCalculo * this.tributavel.percentualRetIrrf) / 100;
  }

  private calcularValorTotalTributacao(baseCalculo: number): boolean {
    const percentualTotal =
      this.tributavel.percentualRetPis +
      this.tributavel.percentualRetCofins +
      this.tributavel.percentualRetCsll;

    const valor = (baseCalculo * percentualTotal) / 100;
    return valor > 10;
  }

  private calcularRetInss(baseCalculo: number): number {
    return (baseCalculo * this.tributavel.percentualRetInss) / 100;
  }
}
