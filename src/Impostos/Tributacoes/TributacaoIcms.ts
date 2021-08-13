import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CalculaBaseCalculoIcms } from '../CalculosDeBc/CalculaBaseCalculoIcms';
import { ResultadoCalculoIcms } from '../Implementacoes/ResultadoCalculoIcms';
import { IResultadoCalculoIcms } from '../IResultadoCalculoIcms';
import { ITributavel } from '../ITributavel';

export class TributacaoIcms {
  private calculaBaseCalculoIcms: CalculaBaseCalculoIcms;
  constructor(
    private tributavel: ITributavel,
    private tipoDesconto: TipoDesconto
  ) {
    this.calculaBaseCalculoIcms = new CalculaBaseCalculoIcms(
      tributavel,
      tipoDesconto
    );
  }

  public calcula(): IResultadoCalculoIcms {
    return this.calculaIcms();
  }

  private calculaIcms(): IResultadoCalculoIcms {
    const baseCalculo =
      this.calculaBaseCalculoIcms.calculaBaseDeCalculo() +
      this.tributavel.valorIpi;

    const valorIcms = this.calculaValorIcms(baseCalculo);

    return new ResultadoCalculoIcms(baseCalculo, valorIcms);
  }

  private calculaValorIcms(baseCalculo: number): number {
    return (baseCalculo * this.tributavel.percentualIcms) / 100;
  }
}
