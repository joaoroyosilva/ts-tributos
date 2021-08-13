import { Cst } from '../../Flags/Cst';
import { ModalidadeDeterminacaoBsIcms } from '../../Flags/ModalidadeDeterminacaoBcIcms';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { ITributavel } from '../ITributavel';
import { CstBase } from './Base/CstBase';

export class Cst00 extends CstBase {
  public modalidadeDeterminacaoBcIcms: ModalidadeDeterminacaoBsIcms;
  public valorBcIcms: number;
  public percentualIcms: number;
  public valorIcms: number;
  public percentualFcp: number;
  public valorFcfp: number;

  constructor(
    public origemMercadoria: OrigemMercadoria,
    public tipoDesconto: TipoDesconto
  ) {
    super(origemMercadoria, Cst.cst00, tipoDesconto);
  }

  public calcula(tributavel: ITributavel) {}
}
