import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { Cst } from '../../Flags/Cst';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { CstBase } from './Base/CstBase';

export class Cst60 extends CstBase {
  public percentualBcStRetido: number;
  public valorBcStRetido: number;

  public valorCreditoOutorgadoOuPresumido: number;
  public valorIcmsStRetido: number;
  public percentualSt: number;

  public baseCalculoIcmsEfetivo: number;
  public percentualIcmsEfetivo: number;
  public valorIcmsEfetivo: number;

  constructor(
    origemMercadoria: OrigemMercadoria = OrigemMercadoria.nacional,
    tipoDesconto: TipoDesconto = TipoDesconto.incondicional
  ) {
    super(origemMercadoria, tipoDesconto);
    this.cst = Cst.cst60;
  }

  public calcula(tributavel: ITributavel) {
    this.percentualIcmsEfetivo =
      tributavel.percentualIcmsSt + tributavel.percentualFcpSt;

    const facadeCalculadoraTributacao = new FacadeCalculadoraTributacao(
      tributavel,
      this.tipoDesconto
    );

    const resultadoCalculoIcms = facadeCalculadoraTributacao.calculaIcmsSt();

    this.percentualBcStRetido = tributavel.percentualReducaoSt;
    this.valorBcStRetido = resultadoCalculoIcms.baseCalculoIcmsSt;
    this.valorIcmsStRetido = resultadoCalculoIcms.valorIcmsSt;

    this.valorCreditoOutorgadoOuPresumido =
      facadeCalculadoraTributacao.calculaIcmsCredito().valor;

    this.percentualSt =
      tributavel.percentualIcmsSt + tributavel.percentualFcpSt;

    this.baseCalculoIcmsEfetivo =
      facadeCalculadoraTributacao.calculaIcmsEfetivo().baseCalculo;
    this.valorIcmsEfetivo =
      facadeCalculadoraTributacao.calculaIcmsEfetivo().valor;
  }
}
