import { TipoDesconto } from '../Flags/TipoDesconto';
import { TributacaoCofins } from '../Impostos/Tributacoes/TributacaoCofins';
import { TributacaoCreditoIcms } from '../Impostos/Tributacoes/TributacaoCreditoIcms';
import { TributacaoDifal } from '../Impostos/Tributacoes/TributacaoDifal';
import { TributacaoFcp } from '../Impostos/Tributacoes/TributacaoFcp';
import { TributacaoFcpSt } from '../Impostos/Tributacoes/TributacaoFcpSt';
import { TributacaoIbpt } from '../Impostos/Tributacoes/TributacaoIbpt';
import { TributacaoIcms } from '../Impostos/Tributacoes/TributacaoIcms';
import { TributacaoIcmsSt } from '../Impostos/Tributacoes/TributacaoIcmsSt';
import { TributacaoIpi } from '../Impostos/Tributacoes/TributacaoIpi';
import { TributacaoPis } from '../Impostos/Tributacoes/TributacaoPis';
export class FacadeCalculadoraTributacao {
    constructor(tributavel, tipoDesconto = TipoDesconto.incondicional) {
        this.tributavel = tributavel;
        this.tipoDesconto = tipoDesconto;
    }
    calculaIcms() {
        return new TributacaoIcms(this.tributavel, this.tipoDesconto).calcula();
    }
    calculaIpi() {
        return new TributacaoIpi(this.tributavel, this.tipoDesconto).calcula();
    }
    calculaIcmsCredito() {
        return new TributacaoCreditoIcms(this.tributavel, this.tipoDesconto).calcula();
    }
    calculaCofins() {
        return new TributacaoCofins(this.tributavel, this.tipoDesconto).calcula();
    }
    calculaPis() {
        return new TributacaoPis(this.tributavel, this.tipoDesconto).calcula();
    }
    calculaDifal() {
        return new TributacaoDifal(this.tributavel, this.tipoDesconto).calcula();
    }
    calculaIcmsSt() {
        return new TributacaoIcmsSt(this.tributavel, this.tipoDesconto).calcula();
    }
    calculaIbpt(ibpt) {
        return new TributacaoIbpt(this.tributavel, ibpt).calcula();
    }
    calculaFcp() {
        return new TributacaoFcp(this.tributavel, this.tipoDesconto).calcula();
    }
    calculaFcpSt() {
        return new TributacaoFcpSt(this.tributavel, this.tipoDesconto).calcula();
    }
}
//# sourceMappingURL=FacadeCalculadoraTributacao.js.map