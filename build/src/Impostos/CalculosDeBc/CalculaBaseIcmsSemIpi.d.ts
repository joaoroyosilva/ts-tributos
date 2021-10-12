import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { CalculaBaseCalculoBase } from './Base/CalculaBaseCalculoBase';
export declare class CalculaBaseCalculoIcmsSemIpi extends CalculaBaseCalculoBase {
    protected tributavel: ITributavel;
    private tipoDesconto;
    constructor(tributavel: ITributavel, tipoDesconto: TipoDesconto);
    calculaBaseDeCalculo(): number;
    private calculaIcmsComDescontoIncondicional;
    private calculaIcmsComDescontoCondicional;
}
