import { TipoDesconto } from '../../Flags/TipoDesconto';
import { IResultadoCalculoIcmsSt } from '../IResultadoCalculoIcmsSt';
import { ITributavel } from '../ITributavel';
export declare class TributacaoIcmsSt {
    private tributavel;
    private tipoDesconto;
    private calculoBaseIcmsSemIpi;
    private baseIcmsSt;
    constructor(tributavel: ITributavel, tipoDesconto: TipoDesconto);
    calcula(): IResultadoCalculoIcmsSt;
    private calculaIcmsSt;
    private calculaIcms;
}
