import { IIbpt } from '../IIbpt';
import { IResultadoCalculoIbpt } from '../IResultadoCalculoIbpt';
import { ITributavel } from '../ITributavel';
export declare class TributacaoIbpt {
    private tributavel;
    private ibpt;
    constructor(tributavel: ITributavel, ibpt: IIbpt);
    calcula(): IResultadoCalculoIbpt;
}
