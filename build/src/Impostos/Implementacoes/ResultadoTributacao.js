import { TipoCalculoIcmsDesonerado } from '../../Flags/TipoCalculoIcmsDesonerado';
import { Crt } from '../../Flags/Crt';
import { Csosn } from '../../Flags/Csosn';
import { Cst } from '../../Flags/Cst';
import { CstIpi } from '../../Flags/CstIpi';
import { CstPisCofins } from '../../Flags/CstPisCofins';
import { ModalidadeDeterminacaoBcIcmsSt } from '../../Flags/ModalidadeDeterminacaoBcIcmsSt';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { TipoOperacao } from '../../Flags/TipoOperacao';
import { TipoPessoa } from '../../Flags/TipoPessoa';
import { Csosn101 } from '../Csosn/Csosn101';
import { Csosn201 } from '../Csosn/Csosn201';
import { Csosn202 } from '../Csosn/Csosn202';
import { Csosn203 } from '../Csosn/Csosn203';
import { Csosn900 } from '../Csosn/Csosn900';
import { Cst00 } from '../Csts/Cst00';
import { Cst10 } from '../Csts/Cst10';
import { Cst20 } from '../Csts/Cst20';
import { Cst30 } from '../Csts/Cst30';
import { Cst41 } from '../Csts/Cst41';
import { Cst50 } from '../Csts/Cst50';
import { Cst51 } from '../Csts/Cst51';
import { Cst60 } from '../Csts/Cst60';
import { Cst70 } from '../Csts/Cst70';
import { Cst90 } from '../Csts/Cst90';
import { TributacaoCofins } from '../Tributacoes/TributacaoCofins';
import { TributacaoDifal } from '../Tributacoes/TributacaoDifal';
import { TributacaoFcp } from '../Tributacoes/TributacaoFcp';
import { TributacaoIbpt } from '../Tributacoes/TributacaoIbpt';
import { TributacaoIpi } from '../Tributacoes/TributacaoIpi';
import { TributacaoIssqn } from '../Tributacoes/TributacaoIssqn';
import { TributacaoPis } from '../Tributacoes/TributacaoPis';
import { Cst40 } from '../Csts/Cst40';
import { Csosn500 } from '../Csosn/Csosn500';
export class ResultadoTributacao {
    constructor(produto, crtEmpresa, tipoOperacao, tipoPessoa, tipoDesconto = TipoDesconto.incondicional, tipoCalculoIcmsDesonerado = TipoCalculoIcmsDesonerado.BasePorDentro) {
        this.produto = produto;
        this.crtEmpresa = crtEmpresa;
        this.tipoOperacao = tipoOperacao;
        this.tipoPessoa = tipoPessoa;
        this.tipoDesconto = tipoDesconto;
        this.tipoCalculoIcmsDesonerado = tipoCalculoIcmsDesonerado;
    }
    calcular() {
        if (this.produto.isServico) {
            const calcularRetencao = this.crtEmpresa != Crt.simplesNacional &&
                this.tipoPessoa != TipoPessoa.fisica;
            this.calcularIssqn(calcularRetencao);
        }
        else {
            this.calcularIpi();
            this.calcularIcms();
            this.calcularDifal();
            this.calcularFcp();
        }
        this.calcularPis();
        this.calcularCofins();
        this.calculaIbpt();
        return this;
    }
    calcularIcms() {
        if (this.crtEmpresa !== Crt.simplesNacional) {
            switch (this.produto.cst) {
                case Cst.cst00:
                    this.icms = new Cst00();
                    this.icms.calcula(this.produto);
                    this.valorBcIcms = this.icms.valorBcIcms;
                    this.percentualIcms = this.icms.percentualIcms;
                    this.valorIcms = this.icms.valorIcms;
                    break;
                case Cst.cst10:
                    this.icms = new Cst10();
                    this.icms.calcula(this.produto);
                    this.valorBcIcms = this.icms.valorBcIcms;
                    this.percentualIcms = this.icms.percentualIcms;
                    this.valorIcms = this.icms.valorIcms;
                    this.percentualMva = this.icms.percentualMva;
                    this.percentualReducaoSt = this.icms.percentualReducaoSt;
                    this.valorBcIcmsSt = this.icms.valorBcIcmsSt;
                    this.percentualIcmsSt = this.icms.percentualIcmsSt;
                    this.valorIcmsSt = this.icms.valorIcmsSt;
                    break;
                case Cst.cst20:
                    this.icms = new Cst20();
                    this.icms.calcula(this.produto);
                    this.valorBcIcms = this.icms.valorBcIcms;
                    this.percentualIcms = this.icms.percentualIcms;
                    this.valorIcms = this.icms.valorIcms;
                    this.percentualReducao = this.icms.percentualReducao;
                    this.valorIcmsDesonerado = this.icms.valorIcmsDesonerado;
                    break;
                case Cst.cst30:
                    this.icms = new Cst30();
                    this.icms.calcula(this.produto);
                    this.percentualMva = this.icms.percentualMva;
                    this.percentualReducaoSt = this.icms.percentualReducaoSt;
                    this.valorBcIcmsSt = this.icms.valorBcIcmsSt;
                    this.percentualIcmsSt = this.icms.percentualIcmsSt;
                    this.valorIcmsSt = this.icms.valorIcmsSt;
                    this.valorIcmsDesonerado = this.icms.valorIcmsDesonerado;
                case Cst.cst40:
                    this.icms = new Cst40();
                    this.icms.calcula(this.produto);
                    this.valorIcmsDesonerado = this.icms.valorIcmsDesonerado;
                    break;
                case Cst.cst41:
                    this.icms = new Cst41();
                    this.icms.calcula(this.produto);
                    break;
                case Cst.cst50:
                    this.icms = new Cst50();
                    this.icms.calcula(this.produto);
                    break;
                case Cst.cst51:
                    this.icms = new Cst51();
                    this.icms.calcula(this.produto);
                    this.valorBcIcms = this.icms.valorBcIcms;
                    this.percentualIcms = this.icms.percentualIcms;
                    this.valorIcms = this.icms.valorIcms;
                    this.percentualReducao = this.icms.percentualReducao;
                    this.percentualDiferimento = this.icms.percentualDiferimento;
                    this.valorIcmsDiferido = this.icms.valorIcmsDiferido;
                    this.valorIcmsOperacao = this.icms.valorIcmsOperacao;
                    break;
                case Cst.cst60:
                    this.icms = new Cst60();
                    this.icms.calcula(this.produto);
                    this.percentualBcStRetido = this.icms.percentualBcStRetido;
                    this.valorBcStRetido = this.icms.valorBcStRetido;
                    this.percentualIcmsEfetivo = this.icms.percentualIcmsEfetivo;
                    this.valorBcIcmsEfetivo = this.icms.baseCalculoIcmsEfetivo;
                    this.valorIcmsEfetivo = this.icms.valorIcmsEfetivo;
                    break;
                case Cst.cst70:
                    this.icms = new Cst70();
                    this.icms.calcula(this.produto);
                    this.percentualReducao = this.icms.percentualReducao;
                    this.valorIcmsDesonerado = this.icms.valorIcmsDesonerado;
                    break;
                case Cst.cst90:
                    this.icms = new Cst90();
                    this.icms.calcula(this.produto);
                    this.valorBcIcms = this.icms.valorBcIcms;
                    this.percentualIcms = this.icms.percentualIcms;
                    this.valorIcms = this.icms.valorIcms;
                    this.percentualMva = this.icms.percentualMva;
                    this.percentualReducaoSt = this.icms.percentualReducaoSt;
                    this.valorBcIcmsSt = this.icms.valorBcIcmsSt;
                    this.percentualIcmsSt = this.icms.percentualIcmsSt;
                    this.valorIcmsSt = this.icms.valorIcmsSt;
                    this.percentualReducaoIcmsBc = this.icms.percentualReducaoIcmsBc;
                    this.percentualCredito = this.icms.percentualCredito;
                    this.valorCredito = this.icms.valorCredito;
                    break;
                default:
                    break;
            }
        }
        else {
            switch (this.produto.csosn) {
                case Csosn.csosn101:
                    this.csosnBase = new Csosn101();
                    this.csosnBase.calcula(this.produto);
                    this.valorCredito = this.csosnBase.valorCredito;
                    this.percentualCredito = this.csosnBase.percentualCredito;
                    break;
                case Csosn.csosn102:
                    //Não tem cálculo
                    break;
                case Csosn.csosn103:
                    //Não tem cálculo
                    break;
                case Csosn.csosn201:
                    this.csosnBase = new Csosn201();
                    this.csosnBase.calcula(this.produto);
                    this.valorCredito = this.csosnBase.valorCredito;
                    this.percentualCredito = this.csosnBase.percentualCredito;
                    switch (this.csosnBase.modalidadeDeterminacaoBcIcmsSt) {
                        case ModalidadeDeterminacaoBcIcmsSt.listaNegativa:
                            //lista Negativa(valor)
                            break;
                        case ModalidadeDeterminacaoBcIcmsSt.listaPositiva:
                            //Lista Positiva(valor)
                            break;
                        case ModalidadeDeterminacaoBcIcmsSt.listaNeutra:
                            //Lista Neutra(valor)
                            break;
                        case ModalidadeDeterminacaoBcIcmsSt.margemValorAgregado:
                            this.percentualMva = this.csosnBase.percentualMva;
                            this.percentualReducaoSt = this.csosnBase.percentualReducaoSt;
                            this.valorBcIcmsSt = this.csosnBase.valorBcIcmsSt;
                            this.percentualIcmsSt = this.csosnBase.percentualIcmsSt;
                            this.valorIcmsSt = this.csosnBase.valorIcmsSt;
                            break;
                        case ModalidadeDeterminacaoBcIcmsSt.pauta:
                            break;
                        case ModalidadeDeterminacaoBcIcmsSt.precoTabeladoOuMaximoSugerido:
                            //Preço Tabelado ou Máximo Sugerido
                            break;
                        default:
                            break;
                    }
                    break;
                case Csosn.csosn202:
                    this.csosnBase = new Csosn202();
                    this.csosnBase.calcula(this.produto);
                    switch (this.csosnBase.modalidadeDeterminacaoBcIcmsSt) {
                        case ModalidadeDeterminacaoBcIcmsSt.margemValorAgregado:
                            this.percentualMva = this.csosnBase.percentualMvaSt;
                            this.percentualReducaoSt = this.csosnBase.percentualReducaoSt;
                            this.valorBcIcmsSt = this.csosnBase.valorBcIcmsSt;
                            this.percentualIcmsSt = this.csosnBase.percentualIcmsSt;
                            this.valorIcmsSt = this.csosnBase.valorIcmsSt;
                            break;
                        default:
                            break;
                    }
                    break;
                case Csosn.csosn203:
                    this.csosnBase = new Csosn203();
                    this.csosnBase.calcula(this.produto);
                    switch (this.csosnBase.modalidadeDeterminacaoBcIcmsSt) {
                        case ModalidadeDeterminacaoBcIcmsSt.margemValorAgregado:
                            this.percentualMva = this.csosnBase.percentualMvaSt;
                            this.percentualReducaoSt = this.csosnBase.percentualReducaoSt;
                            this.valorBcIcmsSt = this.csosnBase.valorBcIcmsSt;
                            this.percentualIcmsSt = this.csosnBase.percentualIcmsSt;
                            this.valorIcmsSt = this.csosnBase.valorIcmsSt;
                            break;
                        default:
                            break;
                    }
                    break;
                case Csosn.csosn300:
                    //Não tem cálculo
                    break;
                case Csosn.csosn400:
                    //Não tem cálculo
                    break;
                case Csosn.csosn500:
                    this.csosnBase = new Csosn500();
                    this.csosnBase.calcula(this.produto);
                    this.percentualIcmsEfetivo = this.csosnBase.percentualIcmsEfetivo;
                    this.valorBcIcmsEfetivo = this.csosnBase.baseCalculoIcmsEfetivo;
                    this.valorIcmsEfetivo = this.csosnBase.valorIcmsEfetivo;
                    break;
                case Csosn.csosn900:
                    this.csosnBase = new Csosn900();
                    this.csosnBase.calcula(this.produto);
                    this.valorBcIcms = this.csosnBase.valorBcIcms;
                    this.percentualIcms = this.csosnBase.percentualIcms;
                    this.valorIcms = this.csosnBase.valorIcms;
                    this.percentualMva = this.csosnBase.percentualMva;
                    this.percentualReducaoSt = this.csosnBase.percentualReducaoIcmsStBc;
                    this.valorBcIcmsSt = this.csosnBase.valorBcIcmsSt;
                    this.percentualIcmsSt = this.csosnBase.percentualIcmsSt;
                    this.valorIcmsSt = this.csosnBase.valorIcmsSt;
                    this.percentualReducaoIcmsBc = this.csosnBase.percentualReducaoIcmsBc;
                    this.percentualCredito = this.csosnBase.percentualCredito;
                    this.valorCredito = this.csosnBase.valorCredito;
                    break;
                default:
                    break;
            }
        }
    }
    calcularIpi() {
        this.ipi = new TributacaoIpi(this.produto, this.tipoDesconto);
        this.valorBcIpi = 0;
        this.valorIpi = 0;
        if (this.produto.cstIpi == CstIpi.cst00 ||
            this.produto.cstIpi == CstIpi.cst49 ||
            this.produto.cstIpi == CstIpi.cst50 ||
            this.produto.cstIpi == CstIpi.cst99) {
            const result = this.ipi.calcula();
            this.valorBcIpi = result.baseCalculo;
            this.valorIpi = result.valor;
            this.produto.valorIpi = result.valor;
        }
    }
    calcularPis() {
        this.pis = new TributacaoPis(this.produto, this.tipoDesconto);
        this.valorBcPis = 0;
        this.valorPis = 0;
        this.produto.valorIcms = this.valorIcms;
        if (this.produto.cstPisCofins == CstPisCofins.cst01 ||
            this.produto.cstPisCofins == CstPisCofins.cst02) {
            const result = this.pis.calcula();
            this.valorBcPis = result.baseCalculo;
            this.valorPis = result.valor;
        }
    }
    calcularCofins() {
        this.cofins = new TributacaoCofins(this.produto, this.tipoDesconto);
        this.valorBcCofins = 0;
        this.valorCofins = 0;
        this.produto.valorIcms = this.valorIcms;
        if (this.produto.cstPisCofins == CstPisCofins.cst01 ||
            this.produto.cstPisCofins == CstPisCofins.cst02) {
            const result = this.cofins.calcula();
            this.valorBcCofins = result.baseCalculo;
            this.valorCofins = result.valor;
        }
    }
    calcularIssqn(calcularRetencao) {
        this.issqn = new TributacaoIssqn(this.produto, this.tipoDesconto);
        const result = this.issqn.calcula(calcularRetencao);
        this.baseCalculoInss = result.baseCalculoInss;
        this.baseCalculoIrrf = result.baseCalculoIrrf;
        this.valorRetCofins = result.valorRetCofins;
        this.valorRetPis = result.valorRetPis;
        this.valorRetIrrf = result.valorRetIrrf;
        this.valorRetInss = result.valorRetInss;
        this.valorRetCsll = result.valorRetCsll;
        this.valorIss = result.valor;
    }
    calcularFcp() {
        this.tributacaoFcp = new TributacaoFcp(this.produto, this.tipoDesconto);
        this.fcp = 0;
        this.valorBcFcp = 0;
        const result = this.tributacaoFcp.calcula();
        this.fcp = result.valor;
        this.valorBcFcp = result.baseCalculo;
    }
    calcularDifal() {
        this.difal = new TributacaoDifal(this.produto, this.tipoDesconto);
        this.valorBcDifal = 0;
        this.valorDifal = 0;
        this.valorIcmsOrigem = 0;
        this.valorIcmsDestino = 0;
        if (this.tipoOperacao === TipoOperacao.operacaoInterestadual &&
            (this.cstGeraDifal(this.produto.cst) ||
                this.csosnGeraDifal(this.produto.csosn)) &&
            this.produto.percentualDifalInterna != 0 &&
            this.produto.percentualDifalInterestadual != 0) {
            const result = this.difal.calcula();
            this.valorBcDifal = result.baseCalculo;
            this.valorDifal = result.difal;
            this.valorIcmsOrigem = result.valorIcmsOrigem;
            this.valorIcmsDestino = result.valorIcmsDestino;
        }
    }
    calculaIbpt() {
        this.ibpt = new TributacaoIbpt(this.produto, this.produto);
        const result = this.ibpt.calcula();
        this.valorTributacaoEstadual = result.tributacaoEstadual;
        this.valorTributacaoFederal = result.tributacaoFederal;
        this.valorTributacaoFederalImportados = result.tributacaoFederalImportados;
        this.valorTributacaoMunicipal = result.tributacaoMunicipal;
        this.valorTotalTributos = result.valorTotalTributos;
    }
    cstGeraDifal(cst) {
        return cst == 0 || cst == 20 || cst == 40 || cst == 41 || cst == 60;
    }
    csosnGeraDifal(csosn) {
        return csosn == 102 || csosn == 103 || csosn == 400 || csosn == 500;
    }
}
//# sourceMappingURL=ResultadoTributacao.js.map