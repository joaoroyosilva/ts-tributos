import { Csosn } from '../Flags/Csosn';
import { Cst } from '../Flags/Cst';
import { CstIpi } from '../Flags/CstIpi';
import { CstPisCofins } from '../Flags/CstPisCofins';
import { Documento } from '../Flags/Documento';

export interface ITributavel {
  documento: Documento;
  cst: Cst;
  csosn: Csosn;
  cstPisCofins: CstPisCofins;
  cstIpi: CstIpi;
  isServico: boolean;
  icmsSobreIpi: boolean;
  deduzIcmsPisCofins: boolean;
  valorProduto: number;
  frete: number;
  seguro: number;
  outrasDespesas: number;
  desconto: number;
  valorIpi: number;
  valorIcms: number;
  percentualReducao: number;
  percentualReducaoIcmsEfetivo: number;
  quantidadeProduto: number;

  percentualIcms: number;
  percentualIcmsEfetivo: number;
  percentualCredito: number;
  percentualDiferimento: number;
  percentualDifalInterna: number;
  percentualDifalInterestadual: number;
  percentualFcp: number;
  percentualMva: number;

  percentualIcmsSt: number;
  percentualIpi: number;
  percentualCofins: number;
  percentualPis: number;
  percentualReducaoSt: number;
  percentualIssqn: number;
  percentualRetPis: number;
  percentualRetCofins: number;
  percentualRetCsll: number;
  percentualRetIrrf: number;
  percentualRetInss: number;
  percentualFcpSt: number;

  percentualCbs: number;
  reducaoCbs: number;
  percentualDiferimentoCbs: number;
  percentualRedutorCompraGov: number;
  percentualCreditoPresumidoCbs: number;

  percentualCreditoPresumidoIbs: number;

  percentualIbsUf: number;
  reducaoIbsUf: number;
  percentualDiferimentoIbsUf: number;

  percentualIbsMun: number;
  reducaoIbsMun: number;
  percentualDiferimentoIbsMun: number;
}
