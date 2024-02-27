import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { TipoCalculoIcmsDesonerado } from '../../Flags/TipoCalculoIcmsDesonerado';
import { IResultadoCalculoIcmsDesonerado } from '../IResultadoCalculoIcmsDesonerado';
export declare class TributacaoIcmsDesonerado {
    tributavel: ITributavel;
    tipoDesconto: TipoDesconto;
    tipoCalculoIcmsDesonerado: TipoCalculoIcmsDesonerado;
    private calculaBaseCalculoIcms;
    constructor(tributavel: ITributavel, tipoDesconto: TipoDesconto, tipoCalculoIcmsDesonerado: TipoCalculoIcmsDesonerado);
    calcula(): IResultadoCalculoIcmsDesonerado;
    private calculaIcmsDesonerado;
    private calculaDesoneracao;
}
