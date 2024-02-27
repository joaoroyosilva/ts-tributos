import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CalculaBaseCalculoIcmsEfetivo } from '../CalculosDeBc/CalculaBaseCalculoIcmsEfetivo';
import { ResultadoCalculoIcmsEfetivo } from '../Implementacoes/ResultadoCalculoIcmsEfetivo';
import { IResultadoCalculoIcmsEfetivo } from '../IResultadoCalculoIcmsEfetivo';
import { ITributavel } from '../ITributavel';

export class TributacaoIcmsEfetivo {
  private calculaBaseCalculoIcmsEfetivo: CalculaBaseCalculoIcmsEfetivo;

  constructor(
    public tributavel: ITributavel,
    public tipoDesconto: TipoDesconto
  ) {
    this.calculaBaseCalculoIcmsEfetivo = new CalculaBaseCalculoIcmsEfetivo(
      tributavel,
      tipoDesconto
    );
  }

  public calcula(): IResultadoCalculoIcmsEfetivo {
    return this.calculaIcms();
  }

  private calculaIcms(): IResultadoCalculoIcmsEfetivo {
    const baseCalculo =
      this.calculaBaseCalculoIcmsEfetivo.calculaBaseDeCalculo();

    const valorIcms = this.calculaValorIcms(baseCalculo);

    return new ResultadoCalculoIcmsEfetivo(baseCalculo, valorIcms);
  }

  private calculaValorIcms(baseCalculo: number): number {
    return (baseCalculo * this.tributavel.percentualIcmsEfetivo) / 100;
  }
}
