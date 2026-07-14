import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CalculaBaseCalculoCofins } from '../CalculosDeBc/CalculaBaseCalculoCofins';
import { ResultadoCalculoCofins } from '../Implementacoes/ResultadoCalculoCofins';
import { IResultadoCalculoCofins } from '../IResultadoCalculoCofins';
import { ITributavel } from '../ITributavel';
import { Utils } from '../../utils/Utils';

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
    const baseCalculo = this.calculaBaseCalculoCofins.calculaBaseDeCalculo();

    // NT 007: vCofins com arredondamento bancário (half-even), paridade com o php-tributos.
    const valorCofins = new Utils().roundHalfEven(this.calculaValorCofins(baseCalculo));

    return new ResultadoCalculoCofins(baseCalculo, valorCofins);
  }

  private calculaValorCofins(baseCalculo: number): number {
    return (baseCalculo * this.tributavel.percentualCofins) / 100;
  }
}
