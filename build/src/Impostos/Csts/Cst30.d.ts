import { TipoCalculoIcmsDesonerado } from '../../Flags/TipoCalculoIcmsDesonerado';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { CstBase } from './Base/CstBase';
export declare class Cst30 extends CstBase {
    origemMercadoria: OrigemMercadoria;
    tipoDesconto: TipoDesconto;
    tipoCalculoIcmsDesonerado: TipoCalculoIcmsDesonerado;
    percentualMva: number;
    percentualReducaoSt: number;
    valorBcIcmsSt: number;
    percentualIcmsSt: number;
    valorIcmsSt: number;
    valorBcFcpSt: number;
    percentualFcpSt: number;
    valorFcpSt: number;
    valorIcmsDesonerado: number;
    constructor(origemMercadoria?: OrigemMercadoria, tipoDesconto?: TipoDesconto, tipoCalculoIcmsDesonerado?: TipoCalculoIcmsDesonerado);
    calcula(tributavel: ITributavel): void;
}
