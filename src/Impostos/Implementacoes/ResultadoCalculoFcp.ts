import { IResultadoCalculoFcp } from '../IResultadoCalculoFcp';

export class ResultadoCalculoFcp implements IResultadoCalculoFcp {
  constructor(public baseCalculo: number, public valor: number) {}
}
