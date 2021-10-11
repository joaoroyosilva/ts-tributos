import { ModalidadeDeterminacaoBcIcms } from '../../Flags/ModalidadeDeterminacaoBcIcms';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { CstBase } from './Base/CstBase';
export declare class Cst51 extends CstBase {
    modalidadeDeterminacaoBcIcms: ModalidadeDeterminacaoBcIcms;
    percentualDiferimento: number;
    valorIcmsDiferido: number;
    valorIcmsOperacao: number;
    percentualIcms: number;
    percentualReducao: number;
    valorBcIcms: number;
    valorIcms: number;
    valorBcFcp: number;
    percentualFcp: number;
    valorFcp: number;
    constructor(origemMercadoria?: OrigemMercadoria, tipoDesconto?: TipoDesconto);
    calcula(tributavel: ITributavel): void;
}
