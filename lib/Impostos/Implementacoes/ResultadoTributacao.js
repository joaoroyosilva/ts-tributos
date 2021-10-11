"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultadoTributacao = void 0;
var Crt_1 = require("../../Flags/Crt");
var Csosn_1 = require("../../Flags/Csosn");
var Cst_1 = require("../../Flags/Cst");
var CstIpi_1 = require("../../Flags/CstIpi");
var CstPisCofins_1 = require("../../Flags/CstPisCofins");
var ModalidadeDeterminacaoBcIcmsSt_1 = require("../../Flags/ModalidadeDeterminacaoBcIcmsSt");
var TipoDesconto_1 = require("../../Flags/TipoDesconto");
var TipoOperacao_1 = require("../../Flags/TipoOperacao");
var TipoPessoa_1 = require("../../Flags/TipoPessoa");
var Csosn101_1 = require("../Csosn/Csosn101");
var Csosn201_1 = require("../Csosn/Csosn201");
var Csosn202_1 = require("../Csosn/Csosn202");
var Csosn900_1 = require("../Csosn/Csosn900");
var Cst00_1 = require("../Csts/Cst00");
var Cst10_1 = require("../Csts/Cst10");
var Cst20_1 = require("../Csts/Cst20");
var Cst30_1 = require("../Csts/Cst30");
var Cst41_1 = require("../Csts/Cst41");
var Cst50_1 = require("../Csts/Cst50");
var Cst51_1 = require("../Csts/Cst51");
var Cst60_1 = require("../Csts/Cst60");
var Cst70_1 = require("../Csts/Cst70");
var Cst90_1 = require("../Csts/Cst90");
var TributacaoCofins_1 = require("../Tributacoes/TributacaoCofins");
var TributacaoDifal_1 = require("../Tributacoes/TributacaoDifal");
var TributacaoFcp_1 = require("../Tributacoes/TributacaoFcp");
var TributacaoIbpt_1 = require("../Tributacoes/TributacaoIbpt");
var TributacaoIpi_1 = require("../Tributacoes/TributacaoIpi");
var TributacaoIssqn_1 = require("../Tributacoes/TributacaoIssqn");
var TributacaoPis_1 = require("../Tributacoes/TributacaoPis");
var ResultadoTributacao = /** @class */ (function () {
    function ResultadoTributacao(produto, crtEmpresa, tipoOperacao, tipoPessoa) {
        this.produto = produto;
        this.crtEmpresa = crtEmpresa;
        this.tipoOperacao = tipoOperacao;
        this.tipoPessoa = tipoPessoa;
    }
    ResultadoTributacao.prototype.calcular = function () {
        if (this.produto.isServico) {
            var calcularRetencao = this.crtEmpresa != Crt_1.Crt.simplesNacional &&
                this.tipoPessoa != TipoPessoa_1.TipoPessoa.fisica;
            this.calcularIssqn(calcularRetencao);
        }
        else {
            this.calcularIcms();
            this.calcularDifal();
            this.calcularFcp();
            this.calcularIpi();
        }
        this.calcularPis();
        this.calcularCofins();
        this.calculaIbpt();
        return this;
    };
    ResultadoTributacao.prototype.calcularIcms = function () {
        if (this.crtEmpresa !== Crt_1.Crt.simplesNacional) {
            switch (this.produto.cst) {
                case Cst_1.Cst.cst00:
                    this.icms = new Cst00_1.Cst00();
                    this.icms.calcula(this.produto);
                    this.valorBcIcms = this.icms.valorBcIcms;
                    this.percentualIcms = this.icms.percentualIcms;
                    this.valorIcms = this.icms.valorIcms;
                    break;
                case Cst_1.Cst.cst10:
                    this.icms = new Cst10_1.Cst10();
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
                case Cst_1.Cst.cst20:
                    this.icms = new Cst20_1.Cst20();
                    this.icms.calcula(this.produto);
                    this.valorBcIcms = this.icms.valorBcIcms;
                    this.percentualIcms = this.icms.percentualIcms;
                    this.valorIcms = this.icms.valorIcms;
                    this.percentualReducao = this.icms.percentualReducao;
                    break;
                case Cst_1.Cst.cst30:
                    this.icms = new Cst30_1.Cst30();
                    this.icms.calcula(this.produto);
                    this.percentualMva = this.icms.percentualMva;
                    this.percentualReducaoSt = this.icms.percentualReducaoSt;
                    this.valorBcIcmsSt = this.icms.valorBcIcmsSt;
                    this.percentualIcmsSt = this.icms.percentualIcmsSt;
                    this.valorIcmsSt = this.icms.valorIcmsSt;
                case Cst_1.Cst.cst41:
                    this.icms = new Cst41_1.Cst41();
                    this.icms.calcula(this.produto);
                    break;
                case Cst_1.Cst.cst50:
                    this.icms = new Cst50_1.Cst50();
                    this.icms.calcula(this.produto);
                    break;
                case Cst_1.Cst.cst51:
                    this.icms = new Cst51_1.Cst51();
                    this.icms.calcula(this.produto);
                    this.valorBcIcms = this.icms.valorBcIcms;
                    this.percentualIcms = this.icms.percentualIcms;
                    this.valorIcms = this.icms.valorIcms;
                    this.percentualReducao = this.icms.percentualReducao;
                    this.percentualDiferimento = this.icms.percentualDiferimento;
                    this.valorIcmsDiferido = this.icms.valorIcmsDiferido;
                    this.valorIcmsOperacao = this.icms.valorIcmsOperacao;
                    break;
                case Cst_1.Cst.cst60:
                    this.icms = new Cst60_1.Cst60();
                    this.icms.calcula(this.produto);
                    this.percentualBcStRetido = this.icms.percentualBcStRetido;
                    this.valorBcStRetido = this.icms.valorBcStRetido;
                    break;
                case Cst_1.Cst.cst70:
                    this.icms = new Cst70_1.Cst70();
                    this.icms.calcula(this.produto);
                    this.percentualReducao = this.icms.percentualReducao;
                    break;
                case Cst_1.Cst.cst90:
                    this.icms = new Cst90_1.Cst90();
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
                case Csosn_1.Csosn.csosn101:
                    this.csosnBase = new Csosn101_1.Csosn101();
                    this.csosnBase.calcula(this.produto);
                    this.valorCredito = this.csosnBase.valorCredito;
                    this.percentualCredito = this.csosnBase.percentualCredito;
                    break;
                case Csosn_1.Csosn.csosn102:
                    //Não tem cálculo
                    break;
                case Csosn_1.Csosn.csosn103:
                    //Não tem cálculo
                    break;
                case Csosn_1.Csosn.csosn201:
                    this.csosnBase = new Csosn201_1.Csosn201();
                    this.csosnBase.calcula(this.produto);
                    this.valorCredito = this.csosnBase.valorCredito;
                    this.percentualCredito = this.csosnBase.percentualCredito;
                    switch (this.csosnBase.modalidadeDeterminacaoBcIcmsSt) {
                        case ModalidadeDeterminacaoBcIcmsSt_1.ModalidadeDeterminacaoBcIcmsSt.listaNegativa:
                            //lista Negativa(valor)
                            break;
                        case ModalidadeDeterminacaoBcIcmsSt_1.ModalidadeDeterminacaoBcIcmsSt.listaPositiva:
                            //Lista Positiva(valor)
                            break;
                        case ModalidadeDeterminacaoBcIcmsSt_1.ModalidadeDeterminacaoBcIcmsSt.listaNeutra:
                            //Lista Neutra(valor)
                            break;
                        case ModalidadeDeterminacaoBcIcmsSt_1.ModalidadeDeterminacaoBcIcmsSt.margemValorAgregado:
                            this.percentualMva = this.csosnBase.percentualMva;
                            this.percentualReducaoSt = this.csosnBase.percentualReducaoSt;
                            this.valorBcIcmsSt = this.csosnBase.valorBcIcmsSt;
                            this.percentualIcmsSt = this.csosnBase.percentualIcmsSt;
                            this.valorIcmsSt = this.csosnBase.valorIcmsSt;
                            break;
                        case ModalidadeDeterminacaoBcIcmsSt_1.ModalidadeDeterminacaoBcIcmsSt.pauta:
                            break;
                        case ModalidadeDeterminacaoBcIcmsSt_1.ModalidadeDeterminacaoBcIcmsSt.precoTabeladoOuMaximoSugerido:
                            //Preço Tabelado ou Máximo Sugerido
                            break;
                        default:
                            break;
                    }
                    break;
                case Csosn_1.Csosn.csosn202 || Csosn_1.Csosn.csosn203:
                    this.csosnBase = new Csosn202_1.Csosn202();
                    this.csosnBase.calcula(this.produto);
                    switch (this.csosnBase.modalidadeDeterminacaoBcIcmsSt) {
                        case ModalidadeDeterminacaoBcIcmsSt_1.ModalidadeDeterminacaoBcIcmsSt.listaNegativa:
                            //lista Negativa(valor)
                            break;
                        case ModalidadeDeterminacaoBcIcmsSt_1.ModalidadeDeterminacaoBcIcmsSt.listaPositiva:
                            //Lista Positiva(valor)
                            break;
                        case ModalidadeDeterminacaoBcIcmsSt_1.ModalidadeDeterminacaoBcIcmsSt.listaNeutra:
                            //Lista Neutra(valor)
                            break;
                        case ModalidadeDeterminacaoBcIcmsSt_1.ModalidadeDeterminacaoBcIcmsSt.margemValorAgregado:
                            this.percentualMva = this.csosnBase.percentualMvaSt;
                            this.percentualReducaoSt = this.csosnBase.percentualReducaoSt;
                            this.valorBcIcmsSt = this.csosnBase.valorBcIcmsSt;
                            this.percentualIcmsSt = this.csosnBase.percentualIcmsSt;
                            this.valorIcmsSt = this.csosnBase.valorIcmsSt;
                            break;
                        case ModalidadeDeterminacaoBcIcmsSt_1.ModalidadeDeterminacaoBcIcmsSt.pauta:
                            break;
                        case ModalidadeDeterminacaoBcIcmsSt_1.ModalidadeDeterminacaoBcIcmsSt.precoTabeladoOuMaximoSugerido:
                            //Preço Tabelado ou Máximo Sugerido
                            break;
                        default:
                            break;
                    }
                    break;
                case Csosn_1.Csosn.csosn300:
                    //Não tem cálculo
                    break;
                case Csosn_1.Csosn.csosn400:
                    //Não tem cálculo
                    break;
                case Csosn_1.Csosn.csosn500:
                    //Não tem cálculo
                    break;
                case Csosn_1.Csosn.csosn900:
                    this.csosnBase = new Csosn900_1.Csosn900();
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
    };
    ResultadoTributacao.prototype.calcularIpi = function () {
        this.ipi = new TributacaoIpi_1.TributacaoIpi(this.produto, TipoDesconto_1.TipoDesconto.condicional);
        this.valorBcIpi = 0;
        this.valorIpi = 0;
        if (this.produto.cstIpi == CstIpi_1.CstIpi.cst00 ||
            this.produto.cstIpi == CstIpi_1.CstIpi.cst49 ||
            this.produto.cstIpi == CstIpi_1.CstIpi.cst50 ||
            this.produto.cstIpi == CstIpi_1.CstIpi.cst99) {
            var result = this.ipi.calcula();
            this.valorBcIpi = result.baseCalculo;
            this.valorIpi = result.valor;
        }
    };
    ResultadoTributacao.prototype.calcularPis = function () {
        this.pis = new TributacaoPis_1.TributacaoPis(this.produto, TipoDesconto_1.TipoDesconto.condicional);
        this.valorBcPis = 0;
        this.valorPis = 0;
        if (this.produto.cstPisCofins == CstPisCofins_1.CstPisCofins.cst01 ||
            this.produto.cstPisCofins == CstPisCofins_1.CstPisCofins.cst02) {
            var result = this.pis.calcula();
            this.valorBcPis = result.baseCalculo;
            this.valorPis = result.valor;
        }
    };
    ResultadoTributacao.prototype.calcularCofins = function () {
        this.cofins = new TributacaoCofins_1.TributacaoCofins(this.produto, TipoDesconto_1.TipoDesconto.condicional);
        this.valorBcCofins = 0;
        this.valorCofins = 0;
        if (this.produto.cstPisCofins == CstPisCofins_1.CstPisCofins.cst01 ||
            this.produto.cstPisCofins == CstPisCofins_1.CstPisCofins.cst02) {
            var result = this.cofins.calcula();
            this.valorBcCofins = result.baseCalculo;
            this.valorCofins = result.valor;
        }
    };
    ResultadoTributacao.prototype.calcularIssqn = function (calcularRetencao) {
        this.issqn = new TributacaoIssqn_1.TributacaoIssqn(this.produto, TipoDesconto_1.TipoDesconto.condicional);
        var result = this.issqn.calcula(calcularRetencao);
        this.baseCalculoInss = result.baseCalculoInss;
        this.baseCalculoIrrf = result.baseCalculoIrrf;
        this.valorRetCofins = result.valorRetCofins;
        this.valorRetPis = result.valorRetPis;
        this.valorRetIrrf = result.valorRetIrrf;
        this.valorRetInss = result.valorRetInss;
        this.valorRetCsll = result.valorRetCsll;
        this.valorIss = result.valor;
    };
    ResultadoTributacao.prototype.calcularFcp = function () {
        this.tributacaoFcp = new TributacaoFcp_1.TributacaoFcp(this.produto, TipoDesconto_1.TipoDesconto.condicional);
        this.fcp = 0;
        this.valorBcFcp = 0;
        var result = this.tributacaoFcp.calcula();
        this.fcp = result.valor;
        this.valorBcFcp = result.baseCalculo;
    };
    ResultadoTributacao.prototype.calcularDifal = function () {
        var cstCsosn = Crt_1.Crt.regimeNormal === this.crtEmpresa
            ? this.produto.cst
            : this.produto.csosn;
        this.difal = new TributacaoDifal_1.TributacaoDifal(this.produto, TipoDesconto_1.TipoDesconto.condicional);
        this.valorBcDifal = 0;
        this.valorDifal = 0;
        this.valorIcmsOrigem = 0;
        this.valorIcmsDestino = 0;
        if (this.tipoOperacao === TipoOperacao_1.TipoOperacao.operacaoInterestadual &&
            this.cstGeraDifal(cstCsosn) &&
            this.produto.percentualDifalInterna != 0 &&
            this.produto.percentualDifalInterestadual != 0) {
            var result = this.difal.calcula();
            this.valorBcDifal = result.baseCalculo;
            this.valorDifal = result.difal;
            this.valorIcmsOrigem = result.valorIcmsOrigem;
            this.valorIcmsDestino = result.valorIcmsDestino;
        }
    };
    ResultadoTributacao.prototype.calculaIbpt = function () {
        this.ibpt = new TributacaoIbpt_1.TributacaoIbpt(this.produto, this.produto);
        var result = this.ibpt.calcula();
        this.valorTributacaoEstadual = result.tributacaoEstadual;
        this.valorTributacaoFederal = result.tributacaoFederal;
        this.valorTributacaoFederalImportados = result.tributacaoFederalImportados;
        this.valorTributacaoMunicipal = result.tributacaoMunicipal;
        this.valorTotalTributos = result.valorTotalTributos;
    };
    ResultadoTributacao.prototype.cstGeraDifal = function (cst) {
        return (cst == 0 ||
            cst == 20 ||
            cst == 40 ||
            cst == 41 ||
            cst == 60 ||
            cst == 102 ||
            cst == 103 ||
            cst == 400 ||
            cst == 500);
    };
    return ResultadoTributacao;
}());
exports.ResultadoTributacao = ResultadoTributacao;
//# sourceMappingURL=ResultadoTributacao.js.map