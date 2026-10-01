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

  /**
   * Base do ICMS-ST: (produto + frete + seguro + outras [+ IPI]) ± desconto,
   * reduzida pela redução ST e acrescida do MVA. Desconto e redução entram uma vez só.
   */
  public calculaBaseDeCalculo(): number {
    let baseCalculo = this.tributavel.icmsSobreIpi
      ? super.calculaBaseDeCalculo() + this.tributavel.valorIpi
      : super.calculaBaseDeCalculo();

    baseCalculo =
      this.tipoDesconto === TipoDesconto.condicional
        ? this.calculaIcmsComDescontoCondicional(baseCalculo)
        : this.calculaIcmsComDescontoIncondicional(baseCalculo);

    baseCalculo =
      baseCalculo - (baseCalculo * this.tributavel.percentualReducaoSt) / 100;

    return this.calculaBaseDeCalculoSt(baseCalculo);
  }

  /**
   * Aplica o MVA sobre a base já com desconto e redução ST.
   */
  public calculaBaseDeCalculoSt(baseCalculoIcms: number): number {
    return baseCalculoIcms * (1 + this.tributavel.percentualMva / 100);
  }

  private calculaIcmsComDescontoIncondicional(baseCalculoInicial): number {
    return baseCalculoInicial - this.tributavel.desconto;
  }

  private calculaIcmsComDescontoCondicional(baseCalculoInicial): number {
    return baseCalculoInicial + this.tributavel.desconto;
  }
}
