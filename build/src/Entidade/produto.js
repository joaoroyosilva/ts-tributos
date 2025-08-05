import { Documento } from '../Flags/Documento';
export class Produto {
    constructor() {
        this.documento = Documento.NFe;
        this.icmsSobreIpi = false;
        this.deduzIcmsPisCofins = false;
        this.valorProduto = 0;
        this.frete = 0;
        this.seguro = 0;
        this.outrasDespesas = 0;
        this.desconto = 0;
        this.valorIpi = 0;
        this.valorIcms = 0;
        this.percentualReducao = 0;
        this.percentualReducaoIcmsEfetivo = 0;
        this.quantidadeProduto = 0;
        this.percentualIcms = 0;
        this.percentualIcmsEfetivo = 0;
        this.percentualCredito = 0;
        this.percentualDiferimento = 0;
        this.percentualDifalInterna = 0;
        this.percentualDifalInterestadual = 0;
        this.percentualFcp = 0;
        this.percentualMva = 0;
        this.percentualIcmsSt = 0;
        this.percentualIpi = 0;
        this.percentualCofins = 0;
        this.percentualPis = 0;
        this.percentualReducaoSt = 0;
        this.percentualIssqn = 0;
        this.percentualRetPis = 0;
        this.percentualRetCofins = 0;
        this.percentualRetCsll = 0;
        this.percentualRetIrrf = 0;
        this.percentualRetInss = 0;
        this.percentualFcpSt = 0;
        this.percentualFederal = 0;
        this.percentualFederalImportados = 0;
        this.percentualEstadual = 0;
        this.percentualMunicipal = 0;
        this.percentualCbs = 0;
        this.reducaoCbs = 0;
        this.percentualDiferimentoCbs = 0;
        this.percentualRedutorCompraGov = 0;
        this.percentualIbsUf = 0;
        this.reducaoIbsUf = 0;
        this.percentualDiferimentoIbsUf = 0;
        this.percentualIbsMun = 0;
        this.reducaoIbsMun = 0;
        this.percentualDiferimentoIbsMun = 0;
    }
}
//# sourceMappingURL=produto.js.map