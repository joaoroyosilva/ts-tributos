import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { CalculaBaseCalculoBase } from './Base/CalculaBaseCalculoBase';

export class CalculaBaseIcmsSt extends CalculaBaseCalculoBase {
  constructor(
    protected tributavel: ITributavel,
    private tipoDesconto: TipoDesconto
  ) {
    super(tributavel);
  }

  public calculaBaseDeCalculo(): number {
    let baseCalculo = super.calculaBaseDeCalculo() + this.tributavel.valorIpi;

    baseCalculo =
      baseCalculo - (baseCalculo * this.tributavel.percentualReducao) / 100;

    const baseCalculoSt = this.calculaBaseDeCalculoSt(baseCalculo);

    return baseCalculoSt;
  }

  public calculaBaseDeCalculoSt(baseCalculoIcms: number): number {
    let baseCalculoSt =
      this.tipoDesconto === TipoDesconto.condicional
        ? this.calculaIcmsComDescontoCondicional(baseCalculoIcms)
        : this.calculaIcmsComDescontoIncondicional(baseCalculoIcms);

    baseCalculoSt = baseCalculoSt * (1 + this.tributavel.percentualMva / 100);

    return baseCalculoSt;
  }

  private calculaIcmsComDescontoIncondicional(baseCalculoInicial): number {
    let baseCalculo = baseCalculoInicial - this.tributavel.desconto;
    baseCalculo =
      baseCalculo - (baseCalculo * this.tributavel.percentualReducaoSt) / 100;
    return baseCalculo;
  }

  private calculaIcmsComDescontoCondicional(baseCalculoInicial): number {
    let baseCalculo = baseCalculoInicial + this.tributavel.desconto;
    baseCalculo =
      baseCalculo - (baseCalculo * this.tributavel.percentualReducaoSt) / 100;

    return baseCalculo;
  }
}
