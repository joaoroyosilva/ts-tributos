import { ArgumentException } from '../../../Exceptions/ArgumentException';
import { Csosn } from '../../../Flags/Csosn';
import { OrigemMercadoria } from '../../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../../Flags/TipoDesconto';
import { ITributavel } from '../../ITributavel';

export abstract class CsosnBase {
  public csosn: Csosn;

  constructor(
    public origemMercadoria: OrigemMercadoria = OrigemMercadoria.nacional,
    public tipoDesconto: TipoDesconto = TipoDesconto.incondicional
  ) {}

  public calcula(tributavel: ITributavel): void {
    throw new ArgumentException();
  }
}
