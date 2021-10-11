import { Csosn } from '../../Flags/Csosn';
import { ModalidadeDeterminacaoBcIcmsSt } from '../../Flags/ModalidadeDeterminacaoBcIcmsSt';
import { OrigemMercadoria } from '../../Flags/OrigemMercadoria';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { CsosnBase } from './Base/CsosnBase';

export class Csosn102 extends CsosnBase {
  public modalidadeDeterminacaoBcIcmsSt: ModalidadeDeterminacaoBcIcmsSt;

  constructor(
    origemMercadoria: OrigemMercadoria = OrigemMercadoria.nacional,
    tipoDesconto: TipoDesconto = TipoDesconto.incondicional
  ) {
    super(origemMercadoria, tipoDesconto);
    this.csosn = Csosn.csosn102;
    this.modalidadeDeterminacaoBcIcmsSt =
      ModalidadeDeterminacaoBcIcmsSt.margemValorAgregado;
  }
}
