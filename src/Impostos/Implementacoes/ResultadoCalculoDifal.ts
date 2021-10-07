import { IDadosMensagemDifal } from '../IDadosMensagemDifal';
import { IResultadoCalculoDifal } from '../IResultadoCalculoDifal';

export class ResultadoCalculoDifal implements IResultadoCalculoDifal {
  constructor(
    public baseCalculo: number,
    public difal: number,
    public fcp: number,
    public valorIcmsDestino: number,
    public valorIcmsOrigem: number
  ) {}

  public getObservacao(dadosMensagemDifal: IDadosMensagemDifal) {
    return ResultadoCalculoDifal.montaMensageDifal(dadosMensagemDifal);
  }

  public static getObservacaoDifal(dadosMensagemDifal: IDadosMensagemDifal) {
    return ResultadoCalculoDifal.montaMensageDifal(dadosMensagemDifal);
  }

  private static montaMensageDifal(dadosMensagemDifal: IDadosMensagemDifal) {
    return `Valores totais do ICMS interstadual: DIFAL da UF destino ${dadosMensagemDifal.valorIcmsDestino
      .toFixed(2)
      .replace('.', ',')} + FCP ${dadosMensagemDifal.fcp
      .toFixed(2)
      .replace(
        '.',
        ','
      )}; DIFAL da UF Origem ${dadosMensagemDifal.valorIcmsOrigem
      .toFixed(2)
      .replace('.', ',')}`;
  }
}
