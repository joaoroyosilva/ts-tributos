import { TipoDesconto } from '../Flags/TipoDesconto';
import { IIbpt } from '../Impostos/IIbpt';
import { IResultadoCalculoCofins } from '../Impostos/IResultadoCalculoCofins';
import { IResultadoCalculoCredito } from '../Impostos/IResultadoCalculoCredito';
import { IResultadoCalculoDifal } from '../Impostos/IResultadoCalculoDifal';
import { IResultadoCalculoFcp } from '../Impostos/IResultadoCalculoFcp';
import { IResultadoCalculoFcpSt } from '../Impostos/IResultadoCalculoFcpSt';
import { IResultadoCalculoIbpt } from '../Impostos/IResultadoCalculoIbpt';
import { IResultadoCalculoIcms } from '../Impostos/IResultadoCalculoIcms';
import { IResultadoCalculoIcmsSt } from '../Impostos/IResultadoCalculoIcmsSt';
import { IResultadoCalculoIpi } from '../Impostos/IResultadoCalculoIpi';
import { IResultadoCalculoPis } from '../Impostos/IResultadoCalculoPis';
import { ITributavel } from '../Impostos/ITributavel';
export declare class FacadeCalculadoraTributacao {
    private tributavel;
    private tipoDesconto;
    constructor(tributavel: ITributavel, tipoDesconto?: TipoDesconto);
    calculaIcms(): IResultadoCalculoIcms;
    calculaIpi(): IResultadoCalculoIpi;
    calculaIcmsCredito(): IResultadoCalculoCredito;
    calculaCofins(): IResultadoCalculoCofins;
    calculaPis(): IResultadoCalculoPis;
    calculaDifal(): IResultadoCalculoDifal;
    calculaIcmsSt(): IResultadoCalculoIcmsSt;
    calculaIbpt(ibpt: IIbpt): IResultadoCalculoIbpt;
    calculaFcp(): IResultadoCalculoFcp;
    calculaFcpSt(): IResultadoCalculoFcpSt;
}
