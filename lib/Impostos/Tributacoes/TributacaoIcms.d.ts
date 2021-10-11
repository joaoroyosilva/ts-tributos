import { TipoDesconto } from '../../Flags/TipoDesconto';
import { IResultadoCalculoIcms } from '../IResultadoCalculoIcms';
import { ITributavel } from '../ITributavel';
export declare class TributacaoIcms {
    tributavel: ITributavel;
    tipoDesconto: TipoDesconto;
    private calculaBaseCalculoIcms;
    constructor(tributavel: ITributavel, tipoDesconto: TipoDesconto);
    calcula(): IResultadoCalculoIcms;
    private calculaIcms;
    private calculaValorIcms;
}
