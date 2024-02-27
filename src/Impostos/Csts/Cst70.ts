import { TipoCalculoIcmsDesonerado } from '../../Flags/TipoCalculoIcmsDesonerado';
import { Cst } from '../../Flags/Cst';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { CstBase } from './Base/CstBase';
import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';

export class Cst70 extends CstBase {
  public percentualReducao: number;
  public valorIcmsDesonerado: number;

  constructor(
    public origemMercadoria: OrigemMercadoria = OrigemMercadoria.nacional,
    public tipoDesconto: TipoDesconto = TipoDesconto.incondicional,
    public tipoCalculoIcmsDesonerado: TipoCalculoIcmsDesonerado = TipoCalculoIcmsDesonerado.BasePorDentro
  ) {
    super(origemMercadoria, tipoDesconto);

    this.cst = Cst.cst70;
  }

  public calcula(tributavel: ITributavel) {
    super.calcula(tributavel);
    this.percentualReducao = tributavel.percentualReducao;

    this.valorIcmsDesonerado = new FacadeCalculadoraTributacao(
      tributavel,
      this.tipoDesconto,
      this.tipoCalculoIcmsDesonerado
    ).calculaIcmsDesonerado().valor;
  }
}
