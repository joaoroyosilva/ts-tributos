import { TipoDesconto } from '../../Flags/TipoDesconto';
import { IResultadoCalculoPis } from '../IResultadoCalculoPis';
import { ITributavel } from '../ITributavel';
export declare class TributacaoPis {
    private tributavel;
    private tipoDesconto;
    private calculaBaseCalculoPis;
    constructor(tributavel: ITributavel, tipoDesconto: TipoDesconto);
    calcula(): IResultadoCalculoPis;
    private calculaPis;
    private calculaValorPis;
}
