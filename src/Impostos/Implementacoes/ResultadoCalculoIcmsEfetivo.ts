import { IResultadoCalculoIcmsEfetivo } from '../IResultadoCalculoIcmsEfetivo';

export class ResultadoCalculoIcmsEfetivo
  implements IResultadoCalculoIcmsEfetivo
{
  constructor(public baseCalculo: number, public valor: number) {}
}
