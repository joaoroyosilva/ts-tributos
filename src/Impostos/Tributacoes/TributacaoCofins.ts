import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CalculaBaseCalculoCofins } from '../CalculosDeBc/CalculaBaseCalculoCofins';
import { ResultadoCalculoCofins } from '../Implementacoes/ResultadoCalculoCofins';
import { IResultadoCalculoCofins } from '../IResultadoCalculoCofins';
import { ITributavel } from '../ITributavel';

export class TributacaoCofins {
  private calculaBaseCalculoCofins: CalculaBaseCalculoCofins;
  constructor(
    private tributavel: ITributavel,
    private tipoDesconto: TipoDesconto
  ) {
    this.calculaBaseCalculoCofins = new CalculaBaseCalculoCofins(
      tributavel,
      tipoDesconto
    );
  }

  public calcula(): IResultadoCalculoCofins {
    return this.calculaCofins();
  }

  private calculaCofins(): IResultadoCalculoCofins {
    const baseCalculo =
      this.calculaBaseCalculoCofins.calculaBaseDeCalculo() +
      this.tributavel.valorIpi;

    const valorCofins = this.calculaValorCofins(baseCalculo);

    return new ResultadoCalculoCofins(baseCalculo, valorCofins);
  }

  private calculaValorCofins(baseCalculo: number): number {
    return (baseCalculo * this.tributavel.percentualCofins) / 100;
  }
}
