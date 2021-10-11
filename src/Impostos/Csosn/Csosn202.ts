import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { Csosn } from '../../Flags/Csosn';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { Csosn102 } from './Csosn102';

export class Csosn202 extends Csosn102 {
  public percentualMvaSt: number;
  public percentualReducaoSt: number;
  public valorBcIcmsSt: number;
  public percentualIcmsSt: number;
  public valorIcmsSt: number;

  constructor(
    origemMercadoria: OrigemMercadoria = OrigemMercadoria.nacional,
    tipoDesconto: TipoDesconto = TipoDesconto.incondicional
  ) {
    super(origemMercadoria, tipoDesconto);
    this.csosn = Csosn.csosn202;
  }

  public calcula(tributavel: ITributavel) {
    this.percentualMvaSt = tributavel.percentualMva;
    this.percentualReducaoSt = tributavel.percentualReducaoSt;
    this.percentualIcmsSt = tributavel.percentualIcmsSt;

    const facade = new FacadeCalculadoraTributacao(
      tributavel,
      this.tipoDesconto
    );

    tributavel.valorIpi = facade.calculaIpi().valor;

    const resultadoCalculoIcmsSt = facade.calculaIcmsSt();

    this.valorBcIcmsSt = resultadoCalculoIcmsSt.baseCalculoIcmsSt;
    this.valorIcmsSt = resultadoCalculoIcmsSt.valorIcmsSt;
  }
}
