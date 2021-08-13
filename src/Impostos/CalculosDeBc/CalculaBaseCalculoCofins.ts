import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { CalculaBaseCalculoBase } from './Base/CalculaBaseCalculoBase';

export class CalculaBaseCalculoCofins extends CalculaBaseCalculoBase {
  constructor(
    protected tributavel: ITributavel,
    private tipoDesconto: TipoDesconto
  ) {
    super(tributavel);
  }

  public calculaBaseDeCalculo(): number {
    const baseCalculo = super.calculaBaseDeCalculo();
    return this.tipoDesconto === TipoDesconto.condicional
      ? this.calculaIcmsComDescontoCondicional(baseCalculo)
      : this.calculaIcmsComDescontoIncondicional(baseCalculo);
  }

  private calculaIcmsComDescontoIncondicional(baseCalculoInicial): number {
    const baseCalculo = baseCalculoInicial - this.tributavel.desconto;
    return baseCalculo;
  }

  private calculaIcmsComDescontoCondicional(baseCalculoInicial): number {
    const baseCalculo = baseCalculoInicial + this.tributavel.desconto;
    return baseCalculo;
  }
}
