import { Utils } from '../../utils/Utils';
import { CalculaBaseCalculoIcms } from '../CalculosDeBc/CalculaBaseCalculoIcms';
import { ResultadoCalculoIcms } from '../Implementacoes/ResultadoCalculoIcms';
export class TributacaoIcms {
    constructor(tributavel, tipoDesconto) {
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
        this.calculaBaseCalculoIcms = new CalculaBaseCalculoIcms(tributavel, tipoDesconto);
    }
    calcula() {
        return this.calculaIcms();
    }
    calculaIcms() {
        // Base e valor a 2 casas, como a php-tributos: o ICMS entra na base do IBS/CBS e, com
        // `rtcNaBaseIcms`, o IBS/CBS volta à base do ICMS — sem o mesmo centavo as libs se afastam.
        const utils = new Utils();
        const baseCalculo = utils.roundHalfUp(this.calculaBaseCalculoIcms.calculaBaseDeCalculo());
        const valorIcms = utils.roundHalfUp(this.calculaValorIcms(baseCalculo));
        return new ResultadoCalculoIcms(baseCalculo, valorIcms);
    }
    calculaValorIcms(baseCalculo) {
        return (baseCalculo * this.tributavel.percentualIcms) / 100;
    }
}
//# sourceMappingURL=TributacaoIcms.js.map