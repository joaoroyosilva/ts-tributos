import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CalculaBaseIcmsSt } from '../CalculosDeBc/CalculaBaseIcmsSt';
import { ResultadoCalculoFcpSt } from '../Implementacoes/ResultadoCalculoFcpSt';
import { IResultadoCalculoFcpSt } from '../IResultadoCalculoFcpSt';
import { ITributavel } from '../ITributavel';

export class TributacaoFcpSt {
  private calculaBaseIcmsSt: CalculaBaseIcmsSt;

  constructor(
    private tributavel: ITributavel,
    private tipoDesconto: TipoDesconto
  ) {
    this.calculaBaseIcmsSt = new CalculaBaseIcmsSt(tributavel, tipoDesconto);
  }

  public calcula(): IResultadoCalculoFcpSt {
    return this.calculaFcpSt();
  }

  private calculaFcpSt(): IResultadoCalculoFcpSt {
    const baseCalculo = this.calculaBaseIcmsSt.calculaBaseDeCalculo();
    const fcp = baseCalculo * (this.tributavel.percentualFcpSt / 100);

    return new ResultadoCalculoFcpSt(baseCalculo, fcp);
  }
}
