import { IResultadoCalculoIcmsSt } from '../IResultadoCalculoIcmsSt';

export class ResultadoCalculoIcmsSt implements IResultadoCalculoIcmsSt {
  constructor(
    public baseCalculoOperacaoPropria: number,
    public valorIcmsProprio: number,
    public baseCalculoIcmsSt: number,
    public valorIcmsSt: number
  ) {}
}
