import { TipoCalculoIcmsDesonerado } from '../../Flags/TipoCalculoIcmsDesonerado';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { Cst00 } from './Cst00';
export declare class Cst20 extends Cst00 {
    origemMercadoria: OrigemMercadoria;
    tipoDesconto: TipoDesconto;
    tipoCalculoIcmsDesonerado: TipoCalculoIcmsDesonerado;
    percentualReducao: number;
    valorBcFcp: number;
    valorIcmsDesonerado: number;
    constructor(origemMercadoria?: OrigemMercadoria, tipoDesconto?: TipoDesconto, tipoCalculoIcmsDesonerado?: TipoCalculoIcmsDesonerado);
    calcula(tributavel: ITributavel): void;
}
