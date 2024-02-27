import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CalculaBaseCalculoIcms } from '../CalculosDeBc/CalculaBaseCalculoIcms';
import { ITributavel } from '../ITributavel';
import { TipoCalculoIcmsDesonerado } from '../../Flags/TipoCalculoIcmsDesonerado';
import { IResultadoCalculoIcmsDesonerado } from '../IResultadoCalculoIcmsDesonerado';
import { ResultadoCalculoIcmsDesonerado } from '../Implementacoes/ResultadoCalculoIcmsDesonerado';
import { Cst } from '../../Flags/Cst';

export class TributacaoIcmsDesonerado {
  private calculaBaseCalculoIcms: CalculaBaseCalculoIcms;

  constructor(
    public tributavel: ITributavel,
    public tipoDesconto: TipoDesconto,
    public tipoCalculoIcmsDesonerado: TipoCalculoIcmsDesonerado
  ) {
    this.calculaBaseCalculoIcms = new CalculaBaseCalculoIcms(
      tributavel,
      tipoDesconto
    );
  }

  public calcula(): IResultadoCalculoIcmsDesonerado {
    return this.calculaIcmsDesonerado();
  }

  private calculaIcmsDesonerado(): ResultadoCalculoIcmsDesonerado {
    let subtotalProduto =
      this.tributavel.valorProduto * this.tributavel.quantidadeProduto;
    let baseCalculo = this.calculaBaseCalculoIcms.calculaBaseDeCalculo();

    let valorIcmsDesonerado = this.calculaDesoneracao(
      this.tipoCalculoIcmsDesonerado == TipoCalculoIcmsDesonerado.BaseSimples
        ? baseCalculo
        : subtotalProduto,
      this.tipoCalculoIcmsDesonerado
    );

    return new ResultadoCalculoIcmsDesonerado(
      subtotalProduto,
      valorIcmsDesonerado
    );
  }

  private calculaDesoneracao(
    valorBase: number,
    tipoCalculo: TipoCalculoIcmsDesonerado
  ): number {
    let aliquota = this.tributavel.percentualIcms / 100;

    if (tipoCalculo == TipoCalculoIcmsDesonerado.BaseSimples) {
      return valorBase * aliquota;
    } else if (tipoCalculo == TipoCalculoIcmsDesonerado.BasePorDentro) {
      if (
        this.tributavel.cst == Cst.cst20 ||
        this.tributavel.cst == Cst.cst70
      ) {
        return (
          (valorBase *
            (1 - aliquota * (1 - this.tributavel.percentualReducao / 100))) /
            (1 - aliquota) -
          valorBase
        );
      } else if (
        this.tributavel.cst == Cst.cst30 ||
        this.tributavel.cst == Cst.cst40
      ) {
        return (valorBase / (1 - aliquota)) * aliquota;
      }
    }

    return 0;
  }
}
