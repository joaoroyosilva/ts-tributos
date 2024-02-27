import { IResultadoCalculoIcmsDesonerado } from '../IResultadoCalculoIcmsDesonerado';

export class ResultadoCalculoIcmsDesonerado
  implements IResultadoCalculoIcmsDesonerado
{
  constructor(public baseCalculo: number, public valor: number) {}
}
