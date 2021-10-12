import { TipoDesconto } from '../../Flags/TipoDesconto';
import { IResultadoCalculoCofins } from '../IResultadoCalculoCofins';
import { ITributavel } from '../ITributavel';
export declare class TributacaoCofins {
    private tributavel;
    private tipoDesconto;
    private calculaBaseCalculoCofins;
    constructor(tributavel: ITributavel, tipoDesconto: TipoDesconto);
    calcula(): IResultadoCalculoCofins;
    private calculaCofins;
    private calculaValorCofins;
}
