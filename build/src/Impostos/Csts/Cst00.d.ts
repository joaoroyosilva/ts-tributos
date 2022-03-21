import { ModalidadeDeterminacaoBcIcms } from '../../Flags/ModalidadeDeterminacaoBcIcms';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { CstBase } from './Base/CstBase';
export declare class Cst00 extends CstBase {
    origemMercadoria: OrigemMercadoria;
    tipoDesconto: TipoDesconto;
    modalidadeDeterminacaoBcIcms: ModalidadeDeterminacaoBcIcms;
    valorBcIcms: number;
    percentualIcms: number;
    valorIcms: number;
    percentualFcp: number;
    valorFcp: number;
    constructor(origemMercadoria?: OrigemMercadoria, tipoDesconto?: TipoDesconto);
    calcula(tributavel: ITributavel): void;
}
