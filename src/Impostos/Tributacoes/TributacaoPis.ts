import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CalculaBaseCalculoPis } from '../CalculosDeBc/CalculaBaseCalculoPis';
import { ResultadoCalculoPis } from '../Implementacoes/ResultadoCalculoPis';
import { IResultadoCalculoPis } from '../IResultadoCalculoPis';
import { ITributavel } from '../ITributavel';

export class TributacaoPis {
  private calculaBaseCalculoPis: CalculaBaseCalculoPis;
  constructor(
    private tributavel: ITributavel,
    private tipoDesconto: TipoDesconto
  ) {
    this.calculaBaseCalculoPis = new CalculaBaseCalculoPis(
      tributavel,
      tipoDesconto
    );
  }

  public calcula(): IResultadoCalculoPis {
    return this.calculaPis();
  }

  private calculaPis(): IResultadoCalculoPis {
    const baseCalculo =
      this.calculaBaseCalculoPis.calculaBaseDeCalculo() +
      this.tributavel.valorIpi;

    const valorPis = this.calculaValorPis(baseCalculo);

    return new ResultadoCalculoPis(baseCalculo, valorPis);
  }

  private calculaValorPis(baseCalculo: number): number {
    return (baseCalculo * this.tributavel.percentualPis) / 100;
  }
}
