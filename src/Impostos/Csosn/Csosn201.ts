import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { Csosn } from '../../Flags/Csosn';
import { ModalidadeDeterminacaoBcIcmsSt } from '../../Flags/ModalidadeDeterminacaoBcIcmsSt';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { Csosn101 } from './Csosn101';

export class Csosn201 extends Csosn101 {
  public modalidadeDeterminacaoBcIcmsSt: ModalidadeDeterminacaoBcIcmsSt;
  public percentualMva: number;
  public percentualReducaoSt: number;
  public valorBcIcmsSt: number;
  public percentualIcmsSt: number;
  public valorIcmsSt: number;

  constructor(
    public origemMercadoria: OrigemMercadoria = OrigemMercadoria.nacional,
    public tipoDesconto: TipoDesconto = TipoDesconto.incondicional
  ) {
    super(origemMercadoria, tipoDesconto);
    this.csosn = Csosn.csosn201;
  }

  public calcula(tributavel: ITributavel) {
    super.calcula(tributavel);

    this.percentualMva = tributavel.percentualMva;
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
