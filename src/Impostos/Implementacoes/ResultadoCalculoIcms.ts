import { IResultadoCalculoIcms } from '../IResultadoCalculoIcms';

export class ResultadoCalculoIcms implements IResultadoCalculoIcms {
  constructor(public baseCalculo: number, public valor: number) {}
}
