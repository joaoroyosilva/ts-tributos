import { IIbpt } from '../IIbpt';
import { ResultadoCalculoIbpt } from '../Implementacoes/ResultadoCalculoIbpt';
import { IResultadoCalculoIbpt } from '../IResultadoCalculoIbpt';
import { ITributavel } from '../ITributavel';

export class TributacaoIbpt {
  constructor(private tributavel: ITributavel, private ibpt: IIbpt) {}

  public calcula(): IResultadoCalculoIbpt {
    const baseCalculo =
      this.tributavel.valorProduto * this.tributavel.quantidadeProduto -
      this.tributavel.desconto;

    const impostoAproximadoFederal =
      (baseCalculo * this.ibpt.percentualFederal) / 100;
    const impostoAproximadoMunicipal =
      (baseCalculo * this.ibpt.percentualMunicipal) / 100;
    const impostoAproximadoEstadual =
      (baseCalculo * this.ibpt.percentualEstadual) / 100;
    const impostoAproximadoImportado =
      (baseCalculo * this.ibpt.percentualFederalImportados) / 100;

    return new ResultadoCalculoIbpt(
      impostoAproximadoFederal,
      impostoAproximadoMunicipal,
      impostoAproximadoEstadual,
      impostoAproximadoImportado,
      baseCalculo
    );
  }
}
