import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { Csosn } from '../../Flags/Csosn';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { CsosnBase } from './Base/CsosnBase';

export class Csosn101 extends CsosnBase {
  public percentualCredito: number;
  public valorCredito: number;

  constructor(
    origemMercadoria: OrigemMercadoria = OrigemMercadoria.nacional,
    tipoDesconto: TipoDesconto = TipoDesconto.incondicional
  ) {
    super(origemMercadoria, tipoDesconto);
    this.csosn = Csosn.csosn101;
  }

  public calcula(tributavel: ITributavel) {
    const resultadoCalculoIcmsCredito = new FacadeCalculadoraTributacao(
      tributavel,
      this.tipoDesconto
    ).calculaIcmsCredito();

    this.percentualCredito = tributavel.percentualCredito;
    this.valorCredito = resultadoCalculoIcmsCredito.valor;
  }
}
