import { ArgumentException } from '../../../Exceptions/ArgumentException';
import { Cst } from '../../../Flags/Cst';
import { OrigemMercadoria } from '../../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../../Flags/TipoDesconto';
import { ITributavel } from '../../ITributavel';

export abstract class CstBase {
  constructor(
    public origemMercadoria: OrigemMercadoria,
    public cst: Cst,
    public tipoDesconto: TipoDesconto
  ) {}

  public calcula(tributavel: ITributavel): void {
    throw new ArgumentException();
  }
}
