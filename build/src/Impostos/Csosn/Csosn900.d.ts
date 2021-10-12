import { ModalidadeDeterminacaoBcIcms } from '../../Flags/ModalidadeDeterminacaoBcIcms';
import { ModalidadeDeterminacaoBcIcmsSt } from '../../Flags/ModalidadeDeterminacaoBcIcmsSt';
import { ITributavel } from '../ITributavel';
import { CsosnBase } from './Base/CsosnBase';
export declare class Csosn900 extends CsosnBase {
    modalidadeDeteminacaoBcIcms: ModalidadeDeterminacaoBcIcms;
    valorBcIcms: number;
    percentualReducaoIcmsBc: number;
    percentualIcms: number;
    valorIcms: number;
    modalidadeDeteminacaoBcIcmsSt: ModalidadeDeterminacaoBcIcmsSt;
    percentualMva: number;
    valorBcIcmsSt: number;
    percentualReducaoIcmsStBc: number;
    percentualIcmsSt: number;
    valorIcmsSt: number;
    percentualCredito: number;
    valorCredito: number;
    calcula(tributavel: ITributavel): void;
    private calculaCredito;
    private calculaIcmsSt;
    private calculaIcms;
}
