import { IResultadoCalculoIpi } from '../IResultadoCalculoIpi';

export class ResultadoCalculoIpi implements IResultadoCalculoIpi {
  constructor(public baseCalculo: number, public valor: number) {}
}
