import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CalculaBaseFcp } from '../CalculosDeBc/CalculaBaseFcp';
import { ResultadoCalculoFcp } from '../Implementacoes/ResultadoCalculoFcp';
import { IResultadoCalculoFcp } from '../IResultadoCalculoFcp';
import { ITributavel } from '../ITributavel';

export class TributacaoFcp {
  private calculaBaseFcp: CalculaBaseFcp;

  constructor(
    private tributavel: ITributavel,
    private tipoDesconto: TipoDesconto
  ) {
    this.calculaBaseFcp = new CalculaBaseFcp(tributavel, tipoDesconto);
  }

  public calcula(): IResultadoCalculoFcp {
    return this.calculaFcp();
  }

  private calculaFcp(): IResultadoCalculoFcp {
    const baseCalculo = this.calculaBaseFcp.calculaBaseDeCalculo();
    const fcp = baseCalculo * (this.tributavel.percentualFcp / 100);

    return new ResultadoCalculoFcp(baseCalculo, fcp);
  }
}
