import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CalculaBaseCalculoIcms } from '../CalculosDeBc/CalculaBaseCalculoIcms';
import { ResultadoCalculoDifal } from '../Implementacoes/ResultadoCalculoDifal';
import { IResultadoCalculoDifal } from '../IResultadoCalculoDifal';
import { ITributavel } from '../ITributavel';
import { TributacaoFcp } from './TributacaoFcp';

export class TributacaoDifal {
  private calculaBaseCalculoIcms: CalculaBaseCalculoIcms;
  private tributacaoFcp: TributacaoFcp;

  constructor(
    private tributavel: ITributavel,
    private tipoDesconto: TipoDesconto
  ) {
    this.calculaBaseCalculoIcms = new CalculaBaseCalculoIcms(
      tributavel,
      tipoDesconto
    );
    this.tributacaoFcp = new TributacaoFcp(tributavel, tipoDesconto);
  }

  public calcula(): IResultadoCalculoDifal {
    return this.calculaIcms();
  }

  private calculaIcms(): ResultadoCalculoDifal {
    const baseCalculo = this.calculaBaseCalculoIcms.calculaBaseDeCalculo();

    const resultadoFcfp = this.tributacaoFcp.calcula();
    const difal = this.calcularDifal(baseCalculo);

    const percentualRateioOrigem = 0;
    const percentualRateioDestino = 100;

    const aliquotaOrigem = difal * (percentualRateioOrigem / 100);
    const aliquotaDestino = difal * (percentualRateioDestino / 100);

    return new ResultadoCalculoDifal(
      baseCalculo,
      difal,
      resultadoFcfp.valor,
      aliquotaDestino,
      aliquotaOrigem
    );
  }

  private calcularDifal(baseCalculo: number): number {
    return (
      baseCalculo *
      ((this.tributavel.percentualDifalInterna -
        this.tributavel.percentualDifalInterestadual) /
        100)
    );
  }
}
