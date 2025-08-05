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
import { TributacaoCbs } from '../Tributacoes/TributacaoCbs';
import { TributacaoIbsUf } from '../Tributacoes/TributacaoIbsUf';
import { TributacaoIbsMun } from '../Tributacoes/TributacaoIbsMun';
export class ResultadoTributacao {
    constructor(produto, crtEmpresa, tipoOperacao, tipoPessoa, tipoDesconto = TipoDesconto.incondicional, tipoCalculoIcmsDesonerado = TipoCalculoIcmsDesonerado.BasePorDentro) {
        this.produto = produto;
        this.crtEmpresa = crtEmpresa;
        this.tipoOperacao = tipoOperacao;
        this.tipoPessoa = tipoPessoa;
        this.tipoDesconto = tipoDesconto;
        this.tipoCalculoIcmsDesonerado = tipoCalculoIcmsDesonerado;
        //retorno/calculo public
        this.percentualReducao = 0;
        this.percentualIcms = 0;
        this.percentualIcmsEfetivo = 0;
        this.percentualCredito = 0;
        this.percentualReducaoSt = 0;
        this.percentualMva = 0;
        this.percentualIcmsSt = 0;
        this.percentualReducaoIcmsBc = 0;
        this.percentualBcStRetido = 0;
        this.percentualDiferimento = 0;
        this.valorIcmsDiferido = 0;
        this.valorIcmsOperacao = 0;
        this.valorBcIcms = 0;
        this.valorIcms = 0;
        this.valorBcIcmsEfetivo = 0;
        this.valorIcmsEfetivo = 0;
        this.valorBcIcmsSt = 0;
        this.valorIcmsSt = 0;
        this.valorCredito = 0;
        this.valorBcStRetido = 0;
        this.valorIcmsDesonerado = 0;
        this.valorBcCofins = 0;
        this.valorCofins = 0;
        this.valorBcPis = 0;
        this.valorPis = 0;
        this.valorBcIpi = 0;
        this.valorIpi = 0;
        this.valorBcDifal = 0;
        this.valorBcFcp = 0;
        this.fcp = 0;
        this.valorDifal = 0;
        this.valorIcmsOrigem = 0;
        this.valorIcmsDestino = 0;
        this.valorIss = 0;
        this.baseCalculoIss = 0;
        this.percentualIss = 0;
        this.baseCalculoInss = 0;
        this.baseCalculoIrrf = 0;
        this.valorRetCofins = 0;
        this.valorRetPis = 0;
        this.valorRetIrrf = 0;
        this.valorRetInss = 0;
        this.valorRetCsll = 0;
        this.valorTributacaoFederal = 0;
        this.valorTributacaoFederalImportados = 0;
        this.valorTributacaoEstadual = 0;
        this.valorTributacaoMunicipal = 0;
        this.valorTotalTributos = 0;
        this.baseCalculoCbs = 0;
        this.valorCbs = 0;
        this.valorDiferidoCbs = 0;
        this.percentualEfetivoCbs = 0;
        this.valorEfetivoCbs = 0;
        this.valorCredutoPresumidoCbs = 0;
        this.valorCredutoPresumidoIbs = 0;
        this.valorCredutoPresumidoIbsUF = 0;
        this.valorCredutoPresumidoIbsMun = 0;
        this.baseCalculoIbsUF = 0;
        this.valorIbsUF = 0;
        this.valorDiferidoIbsUF = 0;
        this.percentualEfetivoIbsUF = 0;
        this.valorEfetivoIbsUF = 0;
        this.baseCalculoIbsMun = 0;
        this.valorIbsMun = 0;
        this.valorDiferidoIbsMun = 0;
        this.percentualEfetivoIbsMun = 0;
        this.valorEfetivoIbsMun = 0;
    }
    calcular() {
        if (this.produto.isServico) {
            const calcularRetencao = (this.crtEmpresa == Crt.regimeNormal ||
                this.crtEmpresa == Crt.simplesNacionalExcesso) &&
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
        //RTC
        this.calcularCbs();
        this.calcularIbsUf();
        this.calcularIbsMun();
        return this;
    }
    calcularIcms() {
        this.valorIcms = 0;
        this.valorIcmsSt = 0;
        this.valorBcIcms = 0;
        this.valorBcIcmsSt = 0;
        if (this.crtEmpresa == Crt.regimeNormal ||
            this.crtEmpresa == Crt.simplesNacionalExcesso) {
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
        if (this.crtEmpresa !== Crt.regimeNormal && this.crtEmpresa !== Crt.simplesNacionalExcesso) {
            return;
        }
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
    calcularCbs() {
        this.cbs = new TributacaoCbs(this.produto, this);
        let resultado = this.cbs.calcula();
        this.baseCalculoCbs = resultado.baseCalculo;
        this.valorCbs = resultado.valor;
        this.valorDiferidoCbs = resultado.valorDiferido;
        this.percentualEfetivoCbs = resultado.percentualEfetivo;
        this.valorEfetivoCbs = resultado.valorEfetivo;
        this.valorCredutoPresumidoCbs = resultado.valorCreditoPresumido;
    }
    calcularIbsUf() {
        this.ibsUf = new TributacaoIbsUf(this.produto, this);
        let resultado = this.ibsUf.calcula();
        this.baseCalculoIbsUF = resultado.baseCalculo;
        this.valorIbsUF = resultado.valor;
        this.valorDiferidoIbsUF = resultado.valorDiferido;
        this.percentualEfetivoIbsUF = resultado.percentualEfetivo;
        this.valorEfetivoIbsUF = resultado.valorEfetivo;
        this.valorCredutoPresumidoIbsUF = resultado.valorCreditoPresumido;
        this.valorCredutoPresumidoIbs += resultado.valorCreditoPresumido;
    }
    calcularIbsMun() {
        this.ibsMun = new TributacaoIbsMun(this.produto, this);
        let resultado = this.ibsMun.calcula();
        this.baseCalculoIbsMun = resultado.baseCalculo;
        this.valorIbsMun = resultado.valor;
        this.valorDiferidoIbsMun = resultado.valorDiferido;
        this.percentualEfetivoIbsMun = resultado.percentualEfetivo;
        this.valorEfetivoIbsMun = resultado.valorEfetivo;
        this.valorCredutoPresumidoIbsMun = resultado.valorCreditoPresumido;
        this.valorCredutoPresumidoIbs += resultado.valorCreditoPresumido;
    }
    cstGeraDifal(cst) {
        return cst == 0 || cst == 20 || cst == 40 || cst == 41 || cst == 60;
    }
    csosnGeraDifal(csosn) {
        return csosn == 102 || csosn == 103 || csosn == 400 || csosn == 500;
    }
}
//# sourceMappingURL=ResultadoTributacao.js.map