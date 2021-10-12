import { TipoDesconto } from '../../Flags/TipoDesconto';
import { IResultadoCalculoCredito } from '../IResultadoCalculoCredito';
import { ITributavel } from '../ITributavel';
export declare class TributacaoCreditoIcms {
    private tributavel;
    private tipoDesconto;
    private calculaBaseCalculoIcms;
    constructor(tributavel: ITributavel, tipoDesconto: TipoDesconto);
    calcula(): IResultadoCalculoCredito;
    private calculaIcmsCredito;
    private calculaCredito;
}
