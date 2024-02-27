import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { Csosn } from '../../Flags/Csosn';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { CsosnBase } from './Base/CsosnBase';

export class Csosn500 extends CsosnBase {
  public percentualBcRetido: number;
  public valorBcRetido: number;
  public percentualSt: number;
  public baseCalculoIcmsEfetivo: number;
  public percentualIcmsEfetivo: number;
  public valorIcmsEfetivo: number;

  constructor(
    origemMercadoria: OrigemMercadoria = OrigemMercadoria.nacional,
    tipoDesconto: TipoDesconto = TipoDesconto.incondicional
  ) {
    super(origemMercadoria, tipoDesconto);
    this.csosn = Csosn.csosn500;
  }

  public calcula(tributavel: ITributavel) {
    this.percentualSt =
      tributavel.percentualIcmsSt + tributavel.percentualFcpSt;

    this.percentualIcmsEfetivo =
      tributavel.percentualIcmsSt + tributavel.percentualFcpSt;

    let facadeCalculadoraTributacao = new FacadeCalculadoraTributacao(
      tributavel,
      this.tipoDesconto
    );

    let icms = facadeCalculadoraTributacao.calculaIcmsEfetivo();

    this.baseCalculoIcmsEfetivo = icms.baseCalculo;
    this.valorIcmsEfetivo = icms.valor;
  }
}
