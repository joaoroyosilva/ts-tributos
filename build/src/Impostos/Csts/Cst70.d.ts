import { TipoCalculoIcmsDesonerado } from '../../Flags/TipoCalculoIcmsDesonerado';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { CstBase } from './Base/CstBase';
export declare class Cst70 extends CstBase {
    origemMercadoria: OrigemMercadoria;
    tipoDesconto: TipoDesconto;
    tipoCalculoIcmsDesonerado: TipoCalculoIcmsDesonerado;
    percentualReducao: number;
    valorIcmsDesonerado: number;
    constructor(origemMercadoria?: OrigemMercadoria, tipoDesconto?: TipoDesconto, tipoCalculoIcmsDesonerado?: TipoCalculoIcmsDesonerado);
    calcula(tributavel: ITributavel): void;
}
