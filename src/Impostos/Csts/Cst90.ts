import { ArgumentException } from '../../Exceptions/ArgumentException';
import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { Cst } from '../../Flags/Cst';
import { Documento } from '../../Flags/Documento';
import { ModalidadeDeterminacaoBcIcms } from '../../Flags/ModalidadeDeterminacaoBcIcms';
import { ModalidadeDeterminacaoBcIcmsSt } from '../../Flags/ModalidadeDeterminacaoBcIcmsSt';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { CstBase } from './Base/CstBase';

export class Cst90 extends CstBase {
  public modalidadeDeterminacaoBcIcms: ModalidadeDeterminacaoBcIcms;
  public modalidadeDeterminacaoBcIcmsSt: ModalidadeDeterminacaoBcIcmsSt;
  public valorBcIcms: number;
  public percentualReducaoIcmsBc: number;
  public percentualIcms: number;
  public valorIcms: number;
  public percentualMva: number;
  public percentualReducaoSt: number;
  public valorBcIcmsSt: number;
  public percentualIcmsSt: number;
  public valorIcmsSt: number;
  public percentualCredito: number;
  public valorCredito: number;
  public valorBcFcp: number;
  public percentualFcp: number;
  public valorFcp: number;
  public valorBcFcpSt: number;
  public percentualFcpSt: number;
  public valorFcpSt: number;

  constructor(
    origemMercadoria: OrigemMercadoria = OrigemMercadoria.nacional,
    tipoDesconto: TipoDesconto = TipoDesconto.incondicional
  ) {
    super(origemMercadoria, tipoDesconto);
    this.cst = Cst.cst90;
  }

  public calcula(tributavel: ITributavel) {
    this.calculaIcms(tributavel);
    this.calculaIcmsSt(tributavel);
    this.calculaCredito(tributavel);
    this.calculaFcp(tributavel);
    this.calculaFcpSt(tributavel);
  }

  private calculaCredito(tributavel: ITributavel) {
    this.percentualCredito = tributavel.percentualCredito;

    switch (tributavel.documento) {
      case Documento.MFe:
      case Documento.MDFe:
      case Documento.SAT:
      case Documento.NFCe:
      case Documento.CTeOs:
      case Documento.NFe:
        const facade = new FacadeCalculadoraTributacao(
          tributavel,
          this.tipoDesconto
        );
        const resutladoCalculaCredito = facade.calculaIcmsCredito();

        this.valorCredito = resutladoCalculaCredito.valor;
        break;
      case Documento.CTe:
        const resultadoIcms = new FacadeCalculadoraTributacao(
          tributavel,
          this.tipoDesconto
        ).calculaIcms();

        this.valorCredito =
          (resultadoIcms.valor * tributavel.percentualCredito) / 100;
        break;

      default:
        throw new ArgumentException();
        break;
    }
  }

  private calculaIcmsSt(tributavel: ITributavel) {
    this.percentualMva = tributavel.percentualMva;
    this.percentualReducaoSt = tributavel.percentualReducaoSt;
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

  private calculaFcp(tributavel: ITributavel) {
    this.percentualFcp = tributavel.percentualFcp;

    const facade = new FacadeCalculadoraTributacao(
      tributavel,
      this.tipoDesconto
    );

    const resultadoCalculoFcp = facade.calculaFcp();

    this.valorBcFcp = resultadoCalculoFcp.baseCalculo;
    this.valorFcp = resultadoCalculoFcp.valor;
  }

  private calculaFcpSt(tributavel: ITributavel) {
    this.percentualFcpSt = tributavel.percentualFcpSt;

    const facade = new FacadeCalculadoraTributacao(
      tributavel,
      this.tipoDesconto
    );

    const resultadoCalculoFcpSt = facade.calculaFcpSt();

    this.valorBcFcpSt = resultadoCalculoFcpSt.baseCalculoFcpSt;
    this.valorFcpSt = resultadoCalculoFcpSt.valorFcpSt;
  }
}
