import { TipoDesconto } from '../../Flags/TipoDesconto';
import { IResultadoCalculoFcp } from '../IResultadoCalculoFcp';
import { ITributavel } from '../ITributavel';
export declare class TributacaoFcp {
    private tributavel;
    private tipoDesconto;
    private calculaBaseFcp;
    constructor(tributavel: ITributavel, tipoDesconto: TipoDesconto);
    calcula(): IResultadoCalculoFcp;
    private calculaFcp;
}
