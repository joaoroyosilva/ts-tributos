import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { CstBase } from './Base/CstBase';
export declare class Cst41 extends CstBase {
    constructor(origemMercadoria?: OrigemMercadoria, tipoDesconto?: TipoDesconto);
    calcula(tributavel: ITributavel): void;
}
