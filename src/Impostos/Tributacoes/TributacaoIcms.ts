import { Utils } from '../../utils/Utils';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CalculaBaseCalculoIcms } from '../CalculosDeBc/CalculaBaseCalculoIcms';
import { ResultadoCalculoIcms } from '../Implementacoes/ResultadoCalculoIcms';
import { IResultadoCalculoIcms } from '../IResultadoCalculoIcms';
import { ITributavel } from '../ITributavel';

export class TributacaoIcms {
  private calculaBaseCalculoIcms: CalculaBaseCalculoIcms;

  constructor(
    public tributavel: ITributavel,
    public tipoDesconto: TipoDesconto
  ) {
    this.calculaBaseCalculoIcms = new CalculaBaseCalculoIcms(
      tributavel,
      tipoDesconto
    );
  }

  public calcula(): IResultadoCalculoIcms {
    return this.calculaIcms();
  }

  private calculaIcms(): IResultadoCalculoIcms {
    // Base e valor a 2 casas, como a php-tributos: o ICMS entra na base do IBS/CBS e, com
    // `rtcNaBaseIcms`, o IBS/CBS volta à base do ICMS — sem o mesmo centavo as libs se afastam.
    const utils = new Utils();
    const baseCalculo = utils.roundHalfUp(this.calculaBaseCalculoIcms.calculaBaseDeCalculo());

    const valorIcms = utils.roundHalfUp(this.calculaValorIcms(baseCalculo));

    return new ResultadoCalculoIcms(baseCalculo, valorIcms);
  }

  private calculaValorIcms(baseCalculo: number): number {
    return (baseCalculo * this.tributavel.percentualIcms) / 100;
  }
}
