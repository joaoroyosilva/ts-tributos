import { IDadosMensagemDifal } from '../IDadosMensagemDifal';

export class DadosMensagemDifal implements IDadosMensagemDifal {
  constructor(
    public fcp: number,
    public valorIcmsDestino: number,
    public valorIcmsOrigem: number
  ) {}
}
