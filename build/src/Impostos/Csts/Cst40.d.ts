import { MotivoDesoneracao } from '../../Flags/MotivoDesoneracao';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { CstBase } from './Base/CstBase';
import { TipoCalculoIcmsDesonerado } from '../../Flags/TipoCalculoIcmsDesonerado';
export declare class Cst40 extends CstBase {
    origemMercadoria: OrigemMercadoria;
    tipoDesconto: TipoDesconto;
    tipoCalculoIcmsDesonerado: TipoCalculoIcmsDesonerado;
    motivoDesoneracao: MotivoDesoneracao;
    valorIcmsDesonerado: number;
    constructor(origemMercadoria?: OrigemMercadoria, tipoDesconto?: TipoDesconto, tipoCalculoIcmsDesonerado?: TipoCalculoIcmsDesonerado);
    calcula(tributavel: ITributavel): void;
}
