import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { CsosnBase } from './Base/CsosnBase';
export declare class Csosn500 extends CsosnBase {
    percentualBcRetido: number;
    valorBcRetido: number;
    percentualSt: number;
    baseCalculoIcmsEfetivo: number;
    percentualIcmsEfetivo: number;
    valorIcmsEfetivo: number;
    constructor(origemMercadoria?: OrigemMercadoria, tipoDesconto?: TipoDesconto);
    calcula(tributavel: ITributavel): void;
}
