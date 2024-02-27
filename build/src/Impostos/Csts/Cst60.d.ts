import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { CstBase } from './Base/CstBase';
export declare class Cst60 extends CstBase {
    percentualBcStRetido: number;
    valorBcStRetido: number;
    valorCreditoOutorgadoOuPresumido: number;
    valorIcmsStRetido: number;
    percentualSt: number;
    baseCalculoIcmsEfetivo: number;
    percentualIcmsEfetivo: number;
    valorIcmsEfetivo: number;
    constructor(origemMercadoria?: OrigemMercadoria, tipoDesconto?: TipoDesconto);
    calcula(tributavel: ITributavel): void;
}
