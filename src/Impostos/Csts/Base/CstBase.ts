import { ArgumentException } from '../../../Exceptions/ArgumentException';
import { Cst } from '../../../Flags/Cst';
import { OrigemMercadoria } from '../../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../../Flags/TipoDesconto';
import { ITributavel } from '../../ITributavel';

export abstract class CstBase {
  public cst: Cst;

  constructor(
    public origemMercadoria: OrigemMercadoria = OrigemMercadoria.nacional,
    public tipoDesconto: TipoDesconto = TipoDesconto.incondicional
  ) {}

  public calcula(tributavel: ITributavel): void {
    throw new ArgumentException();
  }
}
