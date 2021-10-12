import { MotivoDesoneracao } from '../../Flags/MotivoDesoneracao';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CstBase } from './Base/CstBase';
export declare class Cst40 extends CstBase {
    motivoDesoneracao: MotivoDesoneracao;
    valorIcmsDesonerado: number;
    constructor(origemMercadoria?: OrigemMercadoria, tipoDesconto?: TipoDesconto);
}
