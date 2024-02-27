import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CalculaBaseCalculoIcms } from '../CalculosDeBc/CalculaBaseCalculoIcms';
import { ResultadoCalculoIcmsEfetivo } from '../Implementacoes/ResultadoCalculoIcmsEfetivo';
import { IResultadoCalculoIcmsEfetivo } from '../IResultadoCalculoIcmsEfetivo';
import { ITributavel } from '../ITributavel';

export class TributacaoIcmsEfetivo {
  private calculaBaseCalculoIcms: CalculaBaseCalculoIcms;

  constructor(
    public tributavel: ITributavel,
    public tipoDesconto: TipoDesconto
  ) {
    this.calculaBaseCalculoIcms = new CalculaBaseCalculoIcms(
      tributavel,
      tipoDesconto
    );
  }

  public calcula(): IResultadoCalculoIcmsEfetivo {
    return this.calculaIcms();
  }

  private calculaIcms(): IResultadoCalculoIcmsEfetivo {
    const baseCalculo = this.calculaBaseCalculoIcms.calculaBaseDeCalculo();

    const valorIcms = this.calculaValorIcms(baseCalculo);

    return new ResultadoCalculoIcmsEfetivo(baseCalculo, valorIcms);
  }

  private calculaValorIcms(baseCalculo: number): number {
    return (baseCalculo * this.tributavel.percentualIcmsEfetivo) / 100;
  }
}
