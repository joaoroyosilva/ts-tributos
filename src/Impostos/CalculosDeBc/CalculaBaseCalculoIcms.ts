import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { CalculaBaseCalculoBase } from './Base/CalculaBaseCalculoBase';

export class CalculaBaseCalculoIcms extends CalculaBaseCalculoBase {
  constructor(
    protected tributavel: ITributavel,
    protected tipoDesconto: TipoDesconto
  ) {
    super(tributavel);
  }

  public calculaBaseDeCalculo(): number {
    const baseCalculo = this.tributavel.ipiSobreIcms ?
    super.calculaBaseDeCalculo() + this.tributavel.valorIpi : super.calculaBaseDeCalculo();

    return this.tipoDesconto === TipoDesconto.condicional
      ? this.calculaIcmsComDescontoCondicional(baseCalculo)
      : this.calculaIcmsComDescontoIncondicional(baseCalculo);
  }

  private calculaIcmsComDescontoIncondicional(baseCalculoInicial): number {
    let baseCalculo = baseCalculoInicial - this.tributavel.desconto;
    baseCalculo =
      baseCalculo - (baseCalculo * this.tributavel.percentualReducao) / 100;
    return baseCalculo;
  }

  private calculaIcmsComDescontoCondicional(baseCalculoInicial): number {
    let baseCalculo = baseCalculoInicial + this.tributavel.desconto;
    baseCalculo =
      baseCalculo - (baseCalculo * this.tributavel.percentualReducao) / 100;

    return baseCalculo;
  }
}
