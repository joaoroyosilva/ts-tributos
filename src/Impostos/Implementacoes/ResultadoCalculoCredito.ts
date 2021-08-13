import { IResultadoCalculoCredito } from '../IResultadoCalculoCredito';

export class ResultadoCalculoCredito implements IResultadoCalculoCredito {
  constructor(public baseCalculo: number, public valor: number) {}
}
