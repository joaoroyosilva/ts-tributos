import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CalculaBaseCalculoIcmsSemIpi } from '../CalculosDeBc/CalculaBaseIcmsSemIpi';
import { CalculaBaseIcmsSt } from '../CalculosDeBc/CalculaBaseIcmsSt';
import { ResultadoCalculoIcmsSt } from '../Implementacoes/ResultadoCalculoIcmsSt';
import { IResultadoCalculoIcmsSt } from '../IResultadoCalculoIcmsSt';
import { ITributavel } from '../ITributavel';

export class TributacaoIcmsSt {
  private calculoBaseIcmsSemIpi: CalculaBaseCalculoIcmsSemIpi;
  private baseIcmsSt: CalculaBaseIcmsSt;

  constructor(
    private tributavel: ITributavel,
    private tipoDesconto: TipoDesconto
  ) {
    this.calculoBaseIcmsSemIpi = new CalculaBaseCalculoIcmsSemIpi(
      tributavel,
      tipoDesconto
    );
    this.baseIcmsSt = new CalculaBaseIcmsSt(tributavel, tipoDesconto);
  }

  private calculaIcmsSt(): IResultadoCalculoIcmsSt {
    const baseCalculoOperacaoPropria =
      this.calculoBaseIcmsSemIpi.calculaBaseDeCalculo();
    const valorIcmsProprio = this.calculaIcms(baseCalculoOperacaoPropria);

    const baseCalculoIcmsSt = this.baseIcmsSt.calculaBaseDeCalculo();

    const valorIcmsSt =
      baseCalculoIcmsSt * (this.tributavel.percentualIcmsSt / 100) -
      valorIcmsProprio;

    return new ResultadoCalculoIcmsSt(
      baseCalculoOperacaoPropria,
      valorIcmsProprio,
      baseCalculoIcmsSt,
      valorIcmsSt
    );
  }

  private calculaIcms(baseCalculo: number): number {
    return (baseCalculo * this.tributavel.percentualIcms) / 100;
  }
}
