import { Cst } from '../../Flags/Cst';
import { MotivoDesoneracao } from '../../Flags/MotivoDesoneracao';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CstBase } from './Base/CstBase';

export class Cst40 extends CstBase {
  public motivoDesoneracao: MotivoDesoneracao;
  public valorIcmsDesonerado: number;

  constructor(
    origemMercadoria: OrigemMercadoria = OrigemMercadoria.nacional,
    tipoDesconto: TipoDesconto = TipoDesconto.incondicional
  ) {
    super(origemMercadoria, tipoDesconto);
    this.cst = Cst.cst40;
  }
}
