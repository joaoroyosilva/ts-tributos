import { Cst } from '../Flags/Cst';
import { CstIpi } from '../Flags/CstIpi';
import { CstPisCofins } from '../Flags/CstPisCofins';
import { Documento } from '../Flags/Documento';
import { ITributavelProduto } from '../Impostos/ITributavelProduto';
import { Csosn } from '../Flags/Csosn';

export class Produto implements ITributavelProduto {
  public documento: Documento = Documento.NFe;
  public cst: Cst;
  public csosn: Csosn;
  public cstPisCofins: CstPisCofins;
  public cstIpi: CstIpi;
  public isServico: boolean;
  public icmsSobreIpi: boolean = false;
  public deduzIcmsPisCofins: boolean = false;
  public valorProduto: number = 0;
  public frete: number = 0;
  public seguro: number = 0;
  public outrasDespesas: number = 0;
  public desconto: number = 0;
  public valorIpi: number = 0;
  public valorIcms: number = 0;
  public percentualReducao: number = 0;
  public percentualReducaoIcmsEfetivo: number = 0;
  public quantidadeProduto: number = 0;

  public percentualIcms: number = 0;
  public percentualIcmsEfetivo: number = 0;
  public percentualCredito: number = 0;
  public percentualDiferimento: number = 0;
  public percentualDifalInterna: number = 0;
  public percentualDifalInterestadual: number = 0;
  public percentualFcp: number = 0;
  public percentualMva: number = 0;

  public percentualIcmsSt: number = 0;
  public percentualIpi: number = 0;
  public percentualCofins: number = 0;
  public percentualPis: number = 0;
  public percentualReducaoSt: number = 0;
  public percentualIssqn: number = 0;
  public percentualRetPis: number = 0;
  public percentualRetCofins: number = 0;
  public percentualRetCsll: number = 0;
  public percentualRetIrrf: number = 0;
  public percentualRetInss: number = 0;
  public percentualFcpSt: number = 0;

  public percentualFederal: number = 0;
  public percentualFederalImportados: number = 0;
  public percentualEstadual: number = 0;
  public percentualMunicipal: number = 0;

  public percentualCbs: number = 0;
  public reducaoCbs: number = 0;
  public percentualDiferimentoCbs: number = 0;
  public percentualRedutorCompraGov: number = 0;
  public percentualCreditoPresumidoCbs: number = 0;

  public percentualCreditoPresumidoIbs: number = 0;

  public percentualIbsUf: number = 0;
  public reducaoIbsUf: number = 0;
  public percentualDiferimentoIbsUf: number = 0;

  public percentualIbsMun: number = 0;
  public reducaoIbsMun: number = 0;
  public percentualDiferimentoIbsMun: number = 0;
}
