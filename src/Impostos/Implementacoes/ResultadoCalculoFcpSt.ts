import { IResultadoCalculoFcpSt } from '../IResultadoCalculoFcpSt';

export class ResultadoCalculoFcpSt implements IResultadoCalculoFcpSt {
  constructor(public baseCalculoFcpSt: number, public valorFcpSt: number) {}
}
