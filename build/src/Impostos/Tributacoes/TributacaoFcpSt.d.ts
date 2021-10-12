import { TipoDesconto } from '../../Flags/TipoDesconto';
import { IResultadoCalculoFcpSt } from '../IResultadoCalculoFcpSt';
import { ITributavel } from '../ITributavel';
export declare class TributacaoFcpSt {
    private tributavel;
    private tipoDesconto;
    private calculaBaseIcmsSt;
    constructor(tributavel: ITributavel, tipoDesconto: TipoDesconto);
    calcula(): IResultadoCalculoFcpSt;
    private calculaFcpSt;
}
