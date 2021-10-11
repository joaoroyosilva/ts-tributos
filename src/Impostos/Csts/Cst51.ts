import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { Cst } from '../../Flags/Cst';
import { ModalidadeDeterminacaoBcIcms } from '../../Flags/ModalidadeDeterminacaoBcIcms';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { CstBase } from './Base/CstBase';

export class Cst51 extends CstBase {
  public modalidadeDeterminacaoBcIcms: ModalidadeDeterminacaoBcIcms;
  public percentualDiferimento: number;
  public valorIcmsDiferido: number;
  public valorIcmsOperacao: number;
  public percentualIcms: number;
  public percentualReducao: number;
  public valorBcIcms: number;
  public valorIcms: number;
  public valorBcFcp: number;
  public percentualFcp: number;
  public valorFcp: number;

  constructor(
    origemMercadoria: OrigemMercadoria = OrigemMercadoria.nacional,
    tipoDesconto: TipoDesconto = TipoDesconto.incondicional
  ) {
    super(origemMercadoria, tipoDesconto);
    this.cst = Cst.cst51;
  }

  public calcula(tributavel: ITributavel) {
    const facadeCalculadoraTributacao = new FacadeCalculadoraTributacao(
      tributavel,
      this.tipoDesconto
    );
    const resultadoCalculoIcms = facadeCalculadoraTributacao.calculaIcms();

    this.percentualReducao = tributavel.percentualReducao;
    this.valorBcIcms = resultadoCalculoIcms.baseCalculo;
    this.percentualIcms = tributavel.percentualIcms;
    this.valorIcmsOperacao = (this.valorBcIcms * this.percentualIcms) / 100;
    this.percentualDiferimento = tributavel.percentualDiferimento;
    this.valorIcmsDiferido =
      (this.percentualDiferimento * this.valorIcmsOperacao) / 100;
    this.valorIcms = this.valorIcmsOperacao - this.valorIcmsDiferido;

    const resultadoCalculoFcp = facadeCalculadoraTributacao.calculaFcp();

    this.percentualFcp = tributavel.percentualFcp;
    this.valorBcFcp = resultadoCalculoFcp.baseCalculo;
    this.valorFcp = resultadoCalculoFcp.valor;
  }
}
