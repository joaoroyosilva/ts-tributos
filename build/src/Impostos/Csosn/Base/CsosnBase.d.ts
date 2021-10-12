import { Csosn } from '../../../Flags/Csosn';
import { OrigemMercadoria } from '../../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../../Flags/TipoDesconto';
import { ITributavel } from '../../ITributavel';
export declare abstract class CsosnBase {
    origemMercadoria: OrigemMercadoria;
    tipoDesconto: TipoDesconto;
    csosn: Csosn;
    constructor(origemMercadoria?: OrigemMercadoria, tipoDesconto?: TipoDesconto);
    calcula(tributavel: ITributavel): void;
}
