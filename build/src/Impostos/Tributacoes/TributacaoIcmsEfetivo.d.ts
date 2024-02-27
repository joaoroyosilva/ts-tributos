import { TipoDesconto } from '../../Flags/TipoDesconto';
import { IResultadoCalculoIcmsEfetivo } from '../IResultadoCalculoIcmsEfetivo';
import { ITributavel } from '../ITributavel';
export declare class TributacaoIcmsEfetivo {
    tributavel: ITributavel;
    tipoDesconto: TipoDesconto;
    private calculaBaseCalculoIcms;
    constructor(tributavel: ITributavel, tipoDesconto: TipoDesconto);
    calcula(): IResultadoCalculoIcmsEfetivo;
    private calculaIcms;
    private calculaValorIcms;
}
