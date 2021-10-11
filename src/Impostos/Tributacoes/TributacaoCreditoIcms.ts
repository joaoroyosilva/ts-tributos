import { ArgumentException } from '../../Exceptions/ArgumentException';
import { FacadeCalculadoraTributacao } from '../../Facade/FacadeCalculadoraTributacao';
import { Documento } from '../../Flags/Documento';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CalculaBaseCalculoIcms } from '../CalculosDeBc/CalculaBaseCalculoIcms';
import { ResultadoCalculoCredito } from '../Implementacoes/ResultadoCalculoCredito';
import { IResultadoCalculoCredito } from '../IResultadoCalculoCredito';
import { ITributavel } from '../ITributavel';

export class TributacaoCreditoIcms {
  private calculaBaseCalculoIcms: CalculaBaseCalculoIcms;

  constructor(
    private tributavel: ITributavel,
    private tipoDesconto: TipoDesconto
  ) {
    this.calculaBaseCalculoIcms = new CalculaBaseCalculoIcms(
      tributavel,
      tipoDesconto
    );
  }

  public calcula(): IResultadoCalculoCredito {
    return this.calculaIcmsCredito();
  }

  private calculaIcmsCredito(): IResultadoCalculoCredito {
    const baseCalculo = this.calculaBaseCalculoIcms.calculaBaseDeCalculo();

    const valorCredito = this.calculaCredito(baseCalculo);

    return new ResultadoCalculoCredito(baseCalculo, valorCredito);
  }

  private calculaCredito(baseCalculo: number): number {
    switch (this.tributavel.documento) {
      case Documento.MFe:
      case Documento.SAT:
      case Documento.MDFe:
      case Documento.NFCe:
      case Documento.CTeOs:
      case Documento.NFe:
        return (baseCalculo * this.tributavel.percentualCredito) / 100;
      case Documento.CTe:
        var resultadoIcms = new FacadeCalculadoraTributacao(
          this.tributavel,
          this.tipoDesconto
        ).calculaIcmsSt();
        return (
          (resultadoIcms.valorIcmsSt * this.tributavel.percentualCredito) / 100
        );
      default:
        throw new ArgumentException();
    }
  }
}
