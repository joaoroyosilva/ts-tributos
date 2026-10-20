import { ITributavel } from '../../ITributavel';
export declare class CalculaBaseCalculoBase {
    protected tributavel: ITributavel;
    constructor(tributavel: ITributavel);
    protected calculaBaseDeCalculo(): number;
    /**
     * Ponto de partida de toda base do ICMS: a base comum mais o IBS/CBS que a opção
     * `rtcNaBaseIcms` põe dentro dela (zero quando desligada). Lê a soma comum direto, e não
     * `calculaBaseDeCalculo()`, porque as subclasses sobrescrevem esse nome.
     */
    protected calculaBaseDeCalculoIcms(): number;
    private calculaBaseComum;
}
