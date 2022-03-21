import { TipoDesconto } from '../../Flags/TipoDesconto';
import { IResultadoCalculoDifal } from '../IResultadoCalculoDifal';
import { ITributavel } from '../ITributavel';
export declare class TributacaoDifal {
    private tributavel;
    private tipoDesconto;
    private calculaBaseCalculoIcms;
    private tributacaoFcp;
    constructor(tributavel: ITributavel, tipoDesconto: TipoDesconto);
    calcula(): IResultadoCalculoDifal;
    private calculaDifal;
    private calcularDifal;
}
