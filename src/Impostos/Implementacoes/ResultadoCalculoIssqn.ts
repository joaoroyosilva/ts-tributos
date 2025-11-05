import { IResultadoCalculoIssqn } from '../IResultadoCalculoIssqn';

export class ResultadoCalculoIssqn implements IResultadoCalculoIssqn {
  constructor(
    public baseCalculoIss: number,
    public valor: number,
    public baseCalculoInss: number = 0,
    public baseCalculoIrrf: number = 0,
    public valorRetPis: number = 0,
    public valorRetCofins: number = 0,
    public valorRetCsll: number = 0,
    public valorRetInss: number = 0,
    public valorRetIrrf: number = 0
  ) {}
}
