import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { ModalidadeDeterminacaoBcIcms } from '../../Flags/ModalidadeDeterminacaoBcIcms';
import { ModalidadeDeterminacaoBcIcmsSt } from '../../Flags/ModalidadeDeterminacaoBcIcmsSt';
import { ITributavel } from '../ITributavel';
import { CsosnBase } from './Base/CsosnBase';

export class Csosn900 extends CsosnBase {
  public modalidadeDeteminacaoBcIcms: ModalidadeDeterminacaoBcIcms;
  public valorBcIcms: number;
  public percentualReducaoIcmsBc: number;
  public percentualIcms: number;
  public valorIcms: number;

  public modalidadeDeteminacaoBcIcmsSt: ModalidadeDeterminacaoBcIcmsSt;
  public percentualMva: number;
  public valorBcIcmsSt: number;
  public percentualReducaoIcmsStBc: number;
  public percentualIcmsSt: number;
  public valorIcmsSt: number;

  public percentualCredito: number;
  public valorCredito: number;

  public calcula(tributavel: ITributavel) {
    this.calculaIcms(tributavel);
    this.calculaIcmsSt(tributavel);
    this.calculaCredito(tributavel);
  }

  private calculaCredito(tributavel: ITributavel) {
    this.percentualCredito = tributavel.percentualCredito;

    const facade = new FacadeCalculadoraTributacao(
      tributavel,
      this.tipoDesconto
    );
    const resultadoCalculoCredito = facade.calculaIcmsCredito();
    this.valorCredito = resultadoCalculoCredito.valor;
  }

  private calculaIcmsSt(tributavel: ITributavel) {
    this.percentualMva = tributavel.percentualMva;
    this.percentualReducaoIcmsStBc = tributavel.percentualReducaoSt;
    this.percentualIcmsSt = tributavel.percentualIcmsSt;

    const facade = new FacadeCalculadoraTributacao(
      tributavel,
      this.tipoDesconto
    );

    tributavel.valorIpi = facade.calculaIpi().valor;

    const resultadoCalculoIcmsSt = facade.calculaIcmsSt();
    this.valorBcIcmsSt = resultadoCalculoIcmsSt.baseCalculoIcmsSt;
    this.valorIcmsSt = resultadoCalculoIcmsSt.valorIcmsSt;
  }

  private calculaIcms(tributavel: ITributavel) {
    this.percentualReducaoIcmsBc = tributavel.percentualReducao;
    this.percentualIcms = tributavel.percentualIcms;

    const facade = new FacadeCalculadoraTributacao(
      tributavel,
      this.tipoDesconto
    );

    tributavel.valorIpi = facade.calculaIpi().valor;

    const resultadoCalculoIcms = facade.calculaIcms();
    this.valorBcIcms = resultadoCalculoIcms.baseCalculo;
    this.valorIcms = resultadoCalculoIcms.valor;
  }
}
