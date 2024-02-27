import { TipoCalculoIcmsDesonerado } from '../../Flags/TipoCalculoIcmsDesonerado';
import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { Cst } from '../../Flags/Cst';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { CstBase } from './Base/CstBase';

export class Cst30 extends CstBase {
  public percentualMva: number;
  public percentualReducaoSt: number;
  public valorBcIcmsSt: number;
  public percentualIcmsSt: number;
  public valorIcmsSt: number;
  public valorBcFcpSt: number;
  public percentualFcpSt: number;
  public valorFcpSt: number;
  public valorIcmsDesonerado: number;

  constructor(
    public origemMercadoria: OrigemMercadoria = OrigemMercadoria.nacional,
    public tipoDesconto: TipoDesconto = TipoDesconto.incondicional,
    public tipoCalculoIcmsDesonerado: TipoCalculoIcmsDesonerado = TipoCalculoIcmsDesonerado.BasePorDentro
  ) {
    super(origemMercadoria, tipoDesconto);
    this.cst = Cst.cst30;
  }

  public calcula(tributavel: ITributavel) {
    this.percentualMva = tributavel.percentualMva;
    this.percentualReducaoSt = tributavel.percentualReducaoSt;
    this.percentualIcmsSt = tributavel.percentualIcmsSt;
    this.percentualFcpSt = tributavel.percentualFcpSt;

    const facadeCalculadoraTributacao = new FacadeCalculadoraTributacao(
      tributavel,
      this.tipoDesconto
    );

    tributavel.valorIpi = facadeCalculadoraTributacao.calculaIpi().valor;

    const resultadoCalculoIcmsSt = facadeCalculadoraTributacao.calculaIcmsSt();

    this.valorBcIcmsSt = resultadoCalculoIcmsSt.baseCalculoIcmsSt;
    this.valorIcmsSt = resultadoCalculoIcmsSt.valorIcmsSt;

    const resultadoCalculoFcfpSt = facadeCalculadoraTributacao.calculaFcpSt();

    this.valorBcFcpSt = resultadoCalculoFcfpSt.baseCalculoFcpSt;
    this.valorFcpSt = resultadoCalculoFcfpSt.valorFcpSt;

    this.valorIcmsDesonerado = new FacadeCalculadoraTributacao(
      tributavel,
      this.tipoDesconto,
      this.tipoCalculoIcmsDesonerado
    ).calculaIcmsDesonerado().valor;
  }
}
