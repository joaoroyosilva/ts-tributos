import { IResultadoCalculoIcmsDesonerado } from '../Impostos/IResultadoCalculoIcmsDesonerado';
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
import { TributacaoCofins } from '../Impostos/Tributacoes/TributacaoCofins';
import { TributacaoCreditoIcms } from '../Impostos/Tributacoes/TributacaoCreditoIcms';
import { TributacaoDifal } from '../Impostos/Tributacoes/TributacaoDifal';
import { TributacaoFcp } from '../Impostos/Tributacoes/TributacaoFcp';
import { TributacaoFcpSt } from '../Impostos/Tributacoes/TributacaoFcpSt';
import { TributacaoIbpt } from '../Impostos/Tributacoes/TributacaoIbpt';
import { TributacaoIcms } from '../Impostos/Tributacoes/TributacaoIcms';
import { TributacaoIssqn } from '../Impostos/Tributacoes/TributacaoIssqn';
import { TributacaoIcmsSt } from '../Impostos/Tributacoes/TributacaoIcmsSt';
import { TributacaoIpi } from '../Impostos/Tributacoes/TributacaoIpi';
import { TributacaoPis } from '../Impostos/Tributacoes/TributacaoPis';
import { TributacaoIcmsDesonerado } from '../Impostos/Tributacoes/TributacaoIcmsDesonerado';
import { TipoCalculoIcmsDesonerado } from '../Flags/TipoCalculoIcmsDesonerado';
import { TributacaoIcmsEfetivo } from '../Impostos/Tributacoes/TributacaoIcmsEfetivo';
import { IResultadoCalculoIcmsEfetivo } from '../Impostos/IResultadoCalculoIcmsEfetivo';
import { IResultadoCalculoIssqn } from '../Impostos/IResultadoCalculoIssqn';

export class FacadeCalculadoraTributacao {
  constructor(
    private tributavel: ITributavel,
    private tipoDesconto: TipoDesconto = TipoDesconto.incondicional,
    private tipoCalculoIcmsDesonerado = TipoCalculoIcmsDesonerado.BasePorDentro
  ) {}

  public calculaIcms(): IResultadoCalculoIcms {
    return new TributacaoIcms(this.tributavel, this.tipoDesconto).calcula();
  }

  public calculaIssqn(): IResultadoCalculoIssqn {
    return new TributacaoIssqn(this.tributavel, this.tipoDesconto).calcula(
      true
    );
  }

  public calculaIcmsEfetivo(): IResultadoCalculoIcmsEfetivo {
    return new TributacaoIcmsEfetivo(
      this.tributavel,
      this.tipoDesconto
    ).calcula();
  }

  public calculaIpi(): IResultadoCalculoIpi {
    return new TributacaoIpi(this.tributavel, this.tipoDesconto).calcula();
  }

  public calculaIcmsCredito(): IResultadoCalculoCredito {
    return new TributacaoCreditoIcms(
      this.tributavel,
      this.tipoDesconto
    ).calcula();
  }

  public calculaCofins(): IResultadoCalculoCofins {
    return new TributacaoCofins(this.tributavel, this.tipoDesconto).calcula();
  }

  public calculaPis(): IResultadoCalculoPis {
    return new TributacaoPis(this.tributavel, this.tipoDesconto).calcula();
  }

  public calculaDifal(): IResultadoCalculoDifal {
    return new TributacaoDifal(this.tributavel, this.tipoDesconto).calcula();
  }

  public calculaIcmsSt(): IResultadoCalculoIcmsSt {
    return new TributacaoIcmsSt(this.tributavel, this.tipoDesconto).calcula();
  }

  public calculaIbpt(ibpt: IIbpt): IResultadoCalculoIbpt {
    return new TributacaoIbpt(this.tributavel, ibpt).calcula();
  }

  public calculaFcp(): IResultadoCalculoFcp {
    return new TributacaoFcp(this.tributavel, this.tipoDesconto).calcula();
  }

  public calculaIcmsDesonerado(): IResultadoCalculoIcmsDesonerado {
    return new TributacaoIcmsDesonerado(
      this.tributavel,
      this.tipoDesconto,
      this.tipoCalculoIcmsDesonerado
    ).calcula();
  }

  public calculaFcpSt(): IResultadoCalculoFcpSt {
    return new TributacaoFcpSt(this.tributavel, this.tipoDesconto).calcula();
  }
}
