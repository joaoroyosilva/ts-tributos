import { Cst } from '../../../Flags/Cst';
import { OrigemMercadoria } from '../../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../../Flags/TipoDesconto';
import { ITributavel } from '../../ITributavel';
export declare abstract class CstBase {
    origemMercadoria: OrigemMercadoria;
    tipoDesconto: TipoDesconto;
    cst: Cst;
    constructor(origemMercadoria?: OrigemMercadoria, tipoDesconto?: TipoDesconto);
    calcula(tributavel: ITributavel): void;
}
