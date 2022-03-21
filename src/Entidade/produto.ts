import { Cst } from '../../src/Flags/Cst';
import { CstIpi } from '../../src/Flags/CstIpi';
import { CstPisCofins } from '../../src/Flags/CstPisCofins';
import { Documento } from '../../src/Flags/Documento';
import { ITributavelProduto } from '../../src/Impostos/ITributavelProduto';
import { Csosn } from '../Flags/Csosn';

export class Produto implements ITributavelProduto {
  public documento: Documento = Documento.NFe;
  public cst: Cst;
  public csosn: Csosn;
  public cstPisCofins: CstPisCofins;
  public cstIpi: CstIpi;
  public isServico: boolean;
  public ipiSobreIcms: boolean = false;
  public valorProduto: number = 0;
  public frete: number = 0;
  public seguro: number = 0;
  public outrasDespesas: number = 0;
  public desconto: number = 0;
  public valorIpi: number = 0;
  public percentualReducao: number = 0;
  public quantidadeProduto: number = 0;

  public percentualIcms: number = 0;
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
}
