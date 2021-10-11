import { Cst } from '../../Flags/Cst';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { CstBase } from './Base/CstBase';

export class Cst70 extends CstBase {
  public percentualReducao: number;

  constructor(
    origemMercadoria: OrigemMercadoria = OrigemMercadoria.nacional,
    tipoDesconto: TipoDesconto = TipoDesconto.incondicional
  ) {
    super(origemMercadoria, tipoDesconto);

    this.cst = Cst.cst70;
  }

  public calcula(tributavel: ITributavel) {
    super.calcula(tributavel);
    this.percentualReducao = tributavel.percentualReducao;
  }
}
