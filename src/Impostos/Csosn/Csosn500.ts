import { Csosn } from '../../Flags/Csosn';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { CsosnBase } from './Base/CsosnBase';

export class Csosn500 extends CsosnBase {
  public percentualBcRetido: number;
  public valorBcRetido: number;
  public percentualSt: number;

  constructor(
    origemMercadoria: OrigemMercadoria = OrigemMercadoria.nacional,
    tipoDesconto: TipoDesconto = TipoDesconto.incondicional
  ) {
    super(origemMercadoria, tipoDesconto);
    this.csosn = Csosn.csosn500;
  }

  public calcula(tributavel: ITributavel) {
    this.percentualSt =
      tributavel.percentualIcmsSt + tributavel.percentualFcpSt;
  }
}
