import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { Cst00 } from './Cst00';
export declare class Cst20 extends Cst00 {
    origemMercadoria: OrigemMercadoria;
    tipoDesconto: TipoDesconto;
    percentualReducao: number;
    valorBcFcp: number;
    constructor(origemMercadoria?: OrigemMercadoria, tipoDesconto?: TipoDesconto);
    calcula(tributavel: ITributavel): void;
}
