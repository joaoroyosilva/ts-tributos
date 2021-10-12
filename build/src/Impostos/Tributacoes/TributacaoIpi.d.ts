import { TipoDesconto } from '../../Flags/TipoDesconto';
import { IResultadoCalculoIpi } from '../IResultadoCalculoIpi';
import { ITributavel } from '../ITributavel';
export declare class TributacaoIpi {
    private tributavel;
    private tipoDesconto;
    private calculaBaseCalculoIpi;
    constructor(tributavel: ITributavel, tipoDesconto: TipoDesconto);
    calcula(): IResultadoCalculoIpi;
    private calculaIpi;
    private calculaValorIpi;
}
