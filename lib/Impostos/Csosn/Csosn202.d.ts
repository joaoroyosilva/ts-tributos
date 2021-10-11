import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { Csosn102 } from './Csosn102';
export declare class Csosn202 extends Csosn102 {
    percentualMvaSt: number;
    percentualReducaoSt: number;
    valorBcIcmsSt: number;
    percentualIcmsSt: number;
    valorIcmsSt: number;
    constructor(origemMercadoria?: OrigemMercadoria, tipoDesconto?: TipoDesconto);
    calcula(tributavel: ITributavel): void;
}
