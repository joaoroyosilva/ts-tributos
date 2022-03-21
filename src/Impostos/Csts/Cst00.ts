import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { Cst } from '../../Flags/Cst';
import { ModalidadeDeterminacaoBcIcms } from '../../Flags/ModalidadeDeterminacaoBcIcms';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { CstBase } from './Base/CstBase';

export class Cst00 extends CstBase {
  public modalidadeDeterminacaoBcIcms: ModalidadeDeterminacaoBcIcms;
  public valorBcIcms: number;
  public percentualIcms: number;
  public valorIcms: number;
  public percentualFcp: number;
  public valorFcp: number;

  constructor(
    public origemMercadoria: OrigemMercadoria = OrigemMercadoria.nacional,
    public tipoDesconto: TipoDesconto = TipoDesconto.incondicional
  ) {
    super(origemMercadoria, tipoDesconto);
    this.cst = Cst.cst00;
  }

  public calcula(tributavel: ITributavel): void {
    const facadeCalculadoraTributacao = new FacadeCalculadoraTributacao(
      tributavel,
      this.tipoDesconto
    );

    const resultadoCalculoIcms = facadeCalculadoraTributacao.calculaIcms();
    const resultacoCalculoFcp = facadeCalculadoraTributacao.calculaFcp();

    this.valorBcIcms = resultadoCalculoIcms.baseCalculo;
    this.percentualIcms = tributavel.percentualIcms;
    this.valorIcms = resultadoCalculoIcms.valor;
    this.percentualFcp = tributavel.percentualFcp;
    this.valorFcp = resultacoCalculoFcp.valor;
  }
}
