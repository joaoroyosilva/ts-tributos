import { IResultadoCalculoCofins } from '../IResultadoCalculoCofins';

export class ResultadoCalculoCofins implements IResultadoCalculoCofins {
  constructor(public baseCalculo: number, public valor: number) {}
}
