import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { Cst } from '../../Flags/Cst';
import { MotivoDesoneracao } from '../../Flags/MotivoDesoneracao';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { CstBase } from './Base/CstBase';
import { TipoCalculoIcmsDesonerado } from '../../Flags/TipoCalculoIcmsDesonerado';

export class Cst40 extends CstBase {
  public motivoDesoneracao: MotivoDesoneracao;
  public valorIcmsDesonerado: number;

  constructor(
    public origemMercadoria: OrigemMercadoria = OrigemMercadoria.nacional,
    public tipoDesconto: TipoDesconto = TipoDesconto.incondicional,
    public tipoCalculoIcmsDesonerado: TipoCalculoIcmsDesonerado = TipoCalculoIcmsDesonerado.BasePorDentro
  ) {
    super(origemMercadoria, tipoDesconto);
    this.cst = Cst.cst40;
  }

  public calcula(tributavel: ITributavel) {
    let facadeCalculadora = new FacadeCalculadoraTributacao(
      tributavel,
      this.tipoDesconto,
      this.tipoCalculoIcmsDesonerado
    );

    this.valorIcmsDesonerado = facadeCalculadora.calculaIcmsDesonerado().valor;
  }
}
