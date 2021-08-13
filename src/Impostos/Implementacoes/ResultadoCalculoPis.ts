import { IResultadoCalculoPis } from '../IResultadoCalculoPis';

export class ResultadoCalculoPis implements IResultadoCalculoPis {
  constructor(public baseCalculo: number, public valor: number) {}
}
