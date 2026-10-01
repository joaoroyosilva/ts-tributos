import { Utils } from '../../utils/Utils';
import { CalculaBaseCalculoCbsIbs } from '../CalculosDeBc/CalculaBaseCalculoCbsIbs';
import { ResultadoCalculoTribRegular } from '../Implementacoes/ResultadoCalculoTribRegular';
/**
 * Tributação regular — grupo `gTribRegular` do `gIBSCBS` (NT 2025.002-RTC, UB68).
 *
 * É um cálculo **independente** sobre a mesma base do item, não uma variação do cálculo do
 * item: quando o `cClassTrib` do item tem o indicador de tributação regular, a alíquota do
 * item é zero por definição (Exceção 1 das RVs UB18-10/1026, UB37-10/1036 e UB56-10/20/1037),
 * então não há de onde derivar. As alíquotas nominais e as reduções chegam pelo par regular
 * (`percentualRegular*` / `reducaoRegular*`), que descreve outro `cClassTrib`.
 *
 * Espelho de `PhpTributos\Impostos\Tributacoes\TributacaoTribRegular` — os dois lados rodam o
 * mesmo arquivo de vetores canônicos. Ao mexer aqui, mexer lá.
 */
export class TributacaoTribRegular {
    /**
     * O `ResultadoTributacao` só é necessário para compor a base de cálculo (que desconta
     * ICMS/ISS/PIS/COFINS/FCP já apurados). Quem já tem o `vBC` do item na mão usa
     * `calculaSobreBase()` e dispensa o parâmetro.
     */
    constructor(tributavel, resultadoTributacao = null) {
        this.tributavel = tributavel;
        this.calculaBaseCalculo = resultadoTributacao
            ? new CalculaBaseCalculoCbsIbs(tributavel, resultadoTributacao)
            : null;
    }
    calcula() {
        if (!this.calculaBaseCalculo) {
            throw new Error('Sem ResultadoTributacao não há como compor a base — use calculaSobreBase().');
        }
        if (!this.tributavel.possuiTributacaoRegular) {
            return new ResultadoCalculoTribRegular();
        }
        return this.calculaComBase(this.calculaBaseCalculo.calculaBaseCalculoBase());
    }
    /**
     * Mesma conta com a base de cálculo vinda de fora — para quem já tem o `vBC` do item
     * apurado e não quer refazer a composição da base.
     */
    calculaSobreBase(baseCalculo) {
        if (!this.tributavel.possuiTributacaoRegular) {
            return new ResultadoCalculoTribRegular();
        }
        return this.calculaComBase(baseCalculo);
    }
    calculaComBase(baseCalculo) {
        const percentualIbsUf = this.calculaAliquotaEfetiva(this.tributavel.percentualRegularIbsUf, this.tributavel.reducaoRegularIbsUf);
        const percentualIbsMun = this.calculaAliquotaEfetiva(this.tributavel.percentualRegularIbsMun, this.tributavel.reducaoRegularIbsMun);
        const percentualCbs = this.calculaAliquotaEfetiva(this.tributavel.percentualRegularCbs, this.tributavel.reducaoRegularCbs);
        return new ResultadoCalculoTribRegular(baseCalculo, percentualIbsUf, this.calculaValor(baseCalculo, percentualIbsUf), percentualIbsMun, this.calculaValor(baseCalculo, percentualIbsMun), percentualCbs, this.calculaValor(baseCalculo, percentualCbs));
    }
    /**
     * Sem redução a alíquota efetiva É a nominal — não se arredonda o que não passou por conta,
     * senão uma alíquota de 4 casas (0,0975) perderia casas por engano.
     */
    calculaAliquotaEfetiva(nominal, reducao) {
        if (reducao == 0) {
            return nominal;
        }
        return new Utils().roundHalfUp(nominal * (1 - reducao / 100));
    }
    /**
     * `vTribReg = vBC × pAliqEfetReg / 100`, 2 casas — RVs UB72-10 (1040), UB72b-10 (1051) e
     * UB72d-10 (1068), que aceitam tolerância de R$ 0,01.
     */
    calculaValor(baseCalculo, aliquota) {
        return new Utils().roundHalfUp((baseCalculo * aliquota) / 100);
    }
}
//# sourceMappingURL=TributacaoTribRegular.js.map