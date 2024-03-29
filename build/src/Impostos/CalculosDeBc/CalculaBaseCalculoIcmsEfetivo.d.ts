import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { CalculaBaseCalculoBase } from './Base/CalculaBaseCalculoBase';
export declare class CalculaBaseCalculoIcmsEfetivo extends CalculaBaseCalculoBase {
    protected tributavel: ITributavel;
    protected tipoDesconto: TipoDesconto;
    constructor(tributavel: ITributavel, tipoDesconto: TipoDesconto);
    calculaBaseDeCalculo(): number;
    private calculaIcmsComDescontoIncondicional;
    private calculaIcmsComDescontoCondicional;
}
