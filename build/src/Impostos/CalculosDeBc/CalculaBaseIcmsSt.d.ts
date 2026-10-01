import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { CalculaBaseCalculoBase } from './Base/CalculaBaseCalculoBase';
export declare class CalculaBaseIcmsSt extends CalculaBaseCalculoBase {
    protected tributavel: ITributavel;
    private tipoDesconto;
    constructor(tributavel: ITributavel, tipoDesconto: TipoDesconto);
    /**
     * Base do ICMS-ST: (produto + frete + seguro + outras [+ IPI]) ± desconto,
     * reduzida pela redução ST e acrescida do MVA. Desconto e redução entram uma vez só.
     */
    calculaBaseDeCalculo(): number;
    /**
     * Aplica o MVA sobre a base já com desconto e redução ST.
     */
    calculaBaseDeCalculoSt(baseCalculoIcms: number): number;
    private calculaIcmsComDescontoIncondicional;
    private calculaIcmsComDescontoCondicional;
}
