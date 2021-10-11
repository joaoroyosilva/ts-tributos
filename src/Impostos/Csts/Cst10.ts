import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { Cst } from '../../Flags/Cst';
import { ModalidadeDeterminacaoBcIcmsSt } from '../../Flags/ModalidadeDeterminacaoBcIcmsSt';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { Cst00 } from './Cst00';

export class Cst10 extends Cst00 {
  public modalidadeDeterminacaoBcIcmsSt: ModalidadeDeterminacaoBcIcmsSt;
  public percentualMva: number;
  public percentualReducaoSt: number;
  public valorBcIcmsSt: number;
  public percentualIcmsSt: number;
  public valorIcmsSt: number;
  public valorBcFcp: number;
  public valorBcFcpSt: number;
  public percentualFcpSt: number;
  public valorFcpSt: number;

  constructor(
    public origemMercadoria: OrigemMercadoria = OrigemMercadoria.nacional,
    public tipoDesconto: TipoDesconto = TipoDesconto.incondicional
  ) {
    super(origemMercadoria, tipoDesconto);
    this.cst = Cst.cst10;
    this.modalidadeDeterminacaoBcIcmsSt =
      ModalidadeDeterminacaoBcIcmsSt.margemValorAgregado;
  }

  public calcula(tributavel: ITributavel): void {
    super.calcula(tributavel);

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
    const resultadoCalculoFcpSt = facadeCalculadoraTributacao.calculaFcpSt();

    this.valorBcIcmsSt = resultadoCalculoIcmsSt.baseCalculoIcmsSt;
    this.valorIcmsSt = resultadoCalculoIcmsSt.valorIcmsSt;

    this.valorBcFcp = facadeCalculadoraTributacao.calculaFcp().baseCalculo;
    this.valorBcFcpSt = resultadoCalculoFcpSt.baseCalculoFcpSt;
    this.valorFcpSt = resultadoCalculoFcpSt.valorFcpSt;
  }
}
