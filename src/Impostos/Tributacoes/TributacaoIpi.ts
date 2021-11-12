import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CalculaBaseCalculoIpi } from '../CalculosDeBc/CalculaBaseCalculoIpi';
import { ResultadoCalculoIpi } from '../Implementacoes/ResultadoCalculoIpi';
import { IResultadoCalculoIpi } from '../IResultadoCalculoIpi';
import { ITributavel } from '../ITributavel';
import { Documento } from '../../Flags/Documento';

export class TributacaoIpi {
  private calculaBaseCalculoIpi: CalculaBaseCalculoIpi;
  constructor(
    private tributavel: ITributavel,
    private tipoDesconto: TipoDesconto
  ) {
    this.calculaBaseCalculoIpi = new CalculaBaseCalculoIpi(
      tributavel,
      tipoDesconto
    );
  }

  public calcula(): IResultadoCalculoIpi {
    return this.calculaIpi();
  }

  private calculaIpi(): IResultadoCalculoIpi {
    const baseCalculo = this.calculaBaseCalculoIpi.calculaBaseDeCalculo();

    const valorIpi = this.calculaValorIpi(baseCalculo);

    if (this.tributavel.documento == Documento.NFCe) {
      return new ResultadoCalculoIpi(0, 0);
    }

    return new ResultadoCalculoIpi(baseCalculo, valorIpi);
  }

  private calculaValorIpi(baseCalculo: number): number {
    return (baseCalculo * this.tributavel.percentualIpi) / 100;
  }
}
