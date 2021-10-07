import { IResultadoCalculoIbpt } from '../IResultadoCalculoIbpt';

export class ResultadoCalculoIbpt implements IResultadoCalculoIbpt {
  public tributacaoFederal: number;
  public tributacaoFederalImportados: number;
  public tributacaoEstadual: number;
  public tributacaoMunicipal: number;
  public valorTotalTributos: number;

  constructor(
    public impostoAproximadoFederal: number,
    public impostoAproximadoMunipio: number,
    public impostoAproximadoEstadual: number,
    public impostoAproximadoImportados: number,
    public baseCalculo: number
  ) {
    this.tributacaoFederal = impostoAproximadoFederal;
    this.tributacaoFederalImportados = impostoAproximadoImportados;
    this.tributacaoEstadual = impostoAproximadoEstadual;
    this.tributacaoMunicipal = impostoAproximadoMunipio;
    this.valorTotalTributos =
      impostoAproximadoFederal +
      impostoAproximadoMunipio +
      impostoAproximadoEstadual +
      impostoAproximadoImportados;
  }
}
