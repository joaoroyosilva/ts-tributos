import { TipoCalculoIcmsDesonerado } from '../../Flags/TipoCalculoIcmsDesonerado';
import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { Cst } from '../../Flags/Cst';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { Cst00 } from './Cst00';

export class Cst20 extends Cst00 {
  public percentualReducao: number;
  public valorBcFcp: number;
  public valorIcmsDesonerado: number;

  constructor(
    public origemMercadoria: OrigemMercadoria = OrigemMercadoria.nacional,
    public tipoDesconto: TipoDesconto = TipoDesconto.incondicional,
    public tipoCalculoIcmsDesonerado: TipoCalculoIcmsDesonerado = TipoCalculoIcmsDesonerado.BasePorDentro
  ) {
    super(origemMercadoria, tipoDesconto);
    this.cst = Cst.cst20;
  }

  public calcula(tributavel: ITributavel): void {
    super.calcula(tributavel);
    this.percentualReducao = tributavel.percentualReducao;

    this.valorBcFcp = new FacadeCalculadoraTributacao(
      tributavel,
      this.tipoDesconto
    ).calculaFcp().baseCalculo;

    this.valorIcmsDesonerado = new FacadeCalculadoraTributacao(
      tributavel,
      this.tipoDesconto,
      this.tipoCalculoIcmsDesonerado
    ).calculaIcmsDesonerado().valor;
  }
}
