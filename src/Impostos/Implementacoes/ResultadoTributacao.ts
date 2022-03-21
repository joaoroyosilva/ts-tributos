import { Crt } from '../../Flags/Crt';
import { Csosn } from '../../Flags/Csosn';
import { Cst } from '../../Flags/Cst';
import { CstIpi } from '../../Flags/CstIpi';
import { CstPisCofins } from '../../Flags/CstPisCofins';
import { ModalidadeDeterminacaoBcIcmsSt } from '../../Flags/ModalidadeDeterminacaoBcIcmsSt';
import { TipoDesconto } from '../../Flags/TipoDesconto';
import { TipoOperacao } from '../../Flags/TipoOperacao';
import { TipoPessoa } from '../../Flags/TipoPessoa';
import { CsosnBase } from '../Csosn/Base/CsosnBase';
import { Csosn101 } from '../Csosn/Csosn101';
import { Csosn201 } from '../Csosn/Csosn201';
import { Csosn202 } from '../Csosn/Csosn202';
import { Csosn203 } from '../Csosn/Csosn203';
import { Csosn900 } from '../Csosn/Csosn900';
import { CstBase } from '../Csts/Base/CstBase';
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
import { ITributavelProduto } from '../ITributavelProduto';
import { TributacaoCofins } from '../Tributacoes/TributacaoCofins';
import { TributacaoDifal } from '../Tributacoes/TributacaoDifal';
import { TributacaoFcp } from '../Tributacoes/TributacaoFcp';
import { TributacaoIbpt } from '../Tributacoes/TributacaoIbpt';
import { TributacaoIpi } from '../Tributacoes/TributacaoIpi';
import { TributacaoIssqn } from '../Tributacoes/TributacaoIssqn';
import { TributacaoPis } from '../Tributacoes/TributacaoPis';

export class ResultadoTributacao {
  // impostos privados
  private icms: CstBase;
  private csosnBase: CsosnBase;
  private pis: TributacaoPis;
  private cofins: TributacaoCofins;
  private ipi: TributacaoIpi;
  private difal: TributacaoDifal;
  private tributacaoFcp: TributacaoFcp;
  private issqn: TributacaoIssqn;
  private ibpt: TributacaoIbpt;

  //retorno/calculo public
  public percentualReducao: number;
  public percentualIcms: number;
  public percentualCredito: number;
  public percentualReducaoSt: number;
  public percentualMva: number;
  public percentualIcmsSt: number;
  public percentualReducaoIcmsBc: number;
  public percentualBcStRetido: number;
  public percentualDiferimento: number;

  public valorIcmsDiferido: number;
  public valorIcmsOperacao: number;
  public valorBcIcms: number;
  public valorIcms: number;
  public valorBcIcmsSt: number;
  public valorIcmsSt: number;
  public valorCredito: number;
  public valorBcStRetido: number;
  public valorIcmsDesonerado: number;
  public valorBcCofins: number;
  public valorCofins: number;
  public valorBcPis: number;
  public valorPis: number;
  public valorBcIpi: number;
  public valorIpi: number;

  public valorBcDifal: number;
  public valorBcFcp: number;
  public fcp: number;
  public valorDifal: number;
  public valorIcmsOrigem: number;
  public valorIcmsDestino: number;

  public valorIss: number;
  public baseCalculoIss: number;
  public percentualIss: number;
  public baseCalculoInss: number;
  public baseCalculoIrrf: number;
  public valorRetCofins: number;
  public valorRetPis: number;
  public valorRetIrrf: number;
  public valorRetInss: number;
  public valorRetCsll: number;

  public valorTributacaoFederal: number;
  public valorTributacaoFederalImportados: number;
  public valorTributacaoEstadual: number;
  public valorTributacaoMunicipal: number;
  public valorTotalTributos: number;

  constructor(
    private produto: ITributavelProduto,
    private crtEmpresa: Crt,
    private tipoOperacao: TipoOperacao,
    private tipoPessoa: TipoPessoa,
    private tipoDesconto: TipoDesconto = TipoDesconto.incondicional
  ) {}

  public calcular(): ResultadoTributacao {
    if (this.produto.isServico) {
      const calcularRetencao =
        this.crtEmpresa != Crt.simplesNacional &&
        this.tipoPessoa != TipoPessoa.fisica;
      this.calcularIssqn(calcularRetencao);
    } else {
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

  private calcularIcms() {
    if (this.crtEmpresa !== Crt.simplesNacional) {
      switch (this.produto.cst) {
        case Cst.cst00:
          this.icms = new Cst00();
          this.icms.calcula(this.produto);

          this.valorBcIcms = (this.icms as Cst00).valorBcIcms;
          this.percentualIcms = (this.icms as Cst00).percentualIcms;
          this.valorIcms = (this.icms as Cst00).valorIcms;
          break;

        case Cst.cst10:
          this.icms = new Cst10();
          this.icms.calcula(this.produto);

          this.valorBcIcms = (this.icms as Cst10).valorBcIcms;
          this.percentualIcms = (this.icms as Cst10).percentualIcms;
          this.valorIcms = (this.icms as Cst10).valorIcms;
          this.percentualMva = (this.icms as Cst10).percentualMva;
          this.percentualReducaoSt = (this.icms as Cst10).percentualReducaoSt;
          this.valorBcIcmsSt = (this.icms as Cst10).valorBcIcmsSt;
          this.percentualIcmsSt = (this.icms as Cst10).percentualIcmsSt;
          this.valorIcmsSt = (this.icms as Cst10).valorIcmsSt;
          break;

        case Cst.cst20:
          this.icms = new Cst20();
          this.icms.calcula(this.produto);

          this.valorBcIcms = (this.icms as Cst20).valorBcIcms;
          this.percentualIcms = (this.icms as Cst20).percentualIcms;
          this.valorIcms = (this.icms as Cst20).valorIcms;
          this.percentualReducao = (this.icms as Cst20).percentualReducao;
          break;

        case Cst.cst30:
          this.icms = new Cst30();
          this.icms.calcula(this.produto);

          this.percentualMva = (this.icms as Cst30).percentualMva;
          this.percentualReducaoSt = (this.icms as Cst30).percentualReducaoSt;
          this.valorBcIcmsSt = (this.icms as Cst30).valorBcIcmsSt;
          this.percentualIcmsSt = (this.icms as Cst30).percentualIcmsSt;
          this.valorIcmsSt = (this.icms as Cst30).valorIcmsSt;

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

          this.valorBcIcms = (this.icms as Cst51).valorBcIcms;
          this.percentualIcms = (this.icms as Cst51).percentualIcms;
          this.valorIcms = (this.icms as Cst51).valorIcms;
          this.percentualReducao = (this.icms as Cst51).percentualReducao;
          this.percentualDiferimento = (
            this.icms as Cst51
          ).percentualDiferimento;
          this.valorIcmsDiferido = (this.icms as Cst51).valorIcmsDiferido;
          this.valorIcmsOperacao = (this.icms as Cst51).valorIcmsOperacao;
          break;

        case Cst.cst60:
          this.icms = new Cst60();
          this.icms.calcula(this.produto);

          this.percentualBcStRetido = (this.icms as Cst60).percentualBcStRetido;
          this.valorBcStRetido = (this.icms as Cst60).valorBcStRetido;
          break;

        case Cst.cst70:
          this.icms = new Cst70();
          this.icms.calcula(this.produto);

          this.percentualReducao = (this.icms as Cst70).percentualReducao;
          break;

        case Cst.cst90:
          this.icms = new Cst90();
          this.icms.calcula(this.produto);

          this.valorBcIcms = (this.icms as Cst90).valorBcIcms;
          this.percentualIcms = (this.icms as Cst90).percentualIcms;
          this.valorIcms = (this.icms as Cst90).valorIcms;
          this.percentualMva = (this.icms as Cst90).percentualMva;
          this.percentualReducaoSt = (this.icms as Cst90).percentualReducaoSt;
          this.valorBcIcmsSt = (this.icms as Cst90).valorBcIcmsSt;
          this.percentualIcmsSt = (this.icms as Cst90).percentualIcmsSt;
          this.valorIcmsSt = (this.icms as Cst90).valorIcmsSt;
          this.percentualReducaoIcmsBc = (
            this.icms as Cst90
          ).percentualReducaoIcmsBc;
          this.percentualCredito = (this.icms as Cst90).percentualCredito;
          this.valorCredito = (this.icms as Cst90).valorCredito;
          break;

        default:
          break;
      }
    } else {
      switch (this.produto.csosn) {
        case Csosn.csosn101:
          this.csosnBase = new Csosn101();
          this.csosnBase.calcula(this.produto);

          this.valorCredito = (this.csosnBase as Csosn101).valorCredito;
          this.percentualCredito = (
            this.csosnBase as Csosn101
          ).percentualCredito;
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

          this.valorCredito = (this.csosnBase as Csosn201).valorCredito;
          this.percentualCredito = (
            this.csosnBase as Csosn201
          ).percentualCredito;

          switch ((this.csosnBase as Csosn201).modalidadeDeterminacaoBcIcmsSt) {
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
              this.percentualMva = (this.csosnBase as Csosn201).percentualMva;
              this.percentualReducaoSt = (
                this.csosnBase as Csosn201
              ).percentualReducaoSt;
              this.valorBcIcmsSt = (this.csosnBase as Csosn201).valorBcIcmsSt;
              this.percentualIcmsSt = (
                this.csosnBase as Csosn201
              ).percentualIcmsSt;
              this.valorIcmsSt = (this.csosnBase as Csosn201).valorIcmsSt;
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

          switch ((this.csosnBase as Csosn202).modalidadeDeterminacaoBcIcmsSt) {
            case ModalidadeDeterminacaoBcIcmsSt.margemValorAgregado:
              this.percentualMva = (this.csosnBase as Csosn202).percentualMvaSt;
              this.percentualReducaoSt = (
                this.csosnBase as Csosn202
              ).percentualReducaoSt;
              this.valorBcIcmsSt = (this.csosnBase as Csosn202).valorBcIcmsSt;
              this.percentualIcmsSt = (
                this.csosnBase as Csosn202
              ).percentualIcmsSt;
              this.valorIcmsSt = (this.csosnBase as Csosn202).valorIcmsSt;
              break;
            default:
              break;
          }
          break;

        case Csosn.csosn203:
          this.csosnBase = new Csosn203();
          this.csosnBase.calcula(this.produto);

          switch ((this.csosnBase as Csosn203).modalidadeDeterminacaoBcIcmsSt) {
            case ModalidadeDeterminacaoBcIcmsSt.margemValorAgregado:
              this.percentualMva = (this.csosnBase as Csosn202).percentualMvaSt;
              this.percentualReducaoSt = (
                this.csosnBase as Csosn202
              ).percentualReducaoSt;
              this.valorBcIcmsSt = (this.csosnBase as Csosn202).valorBcIcmsSt;
              this.percentualIcmsSt = (
                this.csosnBase as Csosn202
              ).percentualIcmsSt;
              this.valorIcmsSt = (this.csosnBase as Csosn202).valorIcmsSt;
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
          //Não tem cálculo
          break;

        case Csosn.csosn900:
          this.csosnBase = new Csosn900();
          this.csosnBase.calcula(this.produto);

          this.valorBcIcms = (this.csosnBase as Csosn900).valorBcIcms;
          this.percentualIcms = (this.csosnBase as Csosn900).percentualIcms;
          this.valorIcms = (this.csosnBase as Csosn900).valorIcms;
          this.percentualMva = (this.csosnBase as Csosn900).percentualMva;
          this.percentualReducaoSt = (
            this.csosnBase as Csosn900
          ).percentualReducaoIcmsStBc;
          this.valorBcIcmsSt = (this.csosnBase as Csosn900).valorBcIcmsSt;
          this.percentualIcmsSt = (this.csosnBase as Csosn900).percentualIcmsSt;
          this.valorIcmsSt = (this.csosnBase as Csosn900).valorIcmsSt;
          this.percentualReducaoIcmsBc = (
            this.csosnBase as Csosn900
          ).percentualReducaoIcmsBc;
          this.percentualCredito = (
            this.csosnBase as Csosn900
          ).percentualCredito;
          this.valorCredito = (this.csosnBase as Csosn900).valorCredito;

          break;
        default:
          break;
      }
    }
  }

  private calcularIpi() {
    this.ipi = new TributacaoIpi(this.produto, this.tipoDesconto);
    this.valorBcIpi = 0;
    this.valorIpi = 0;

    if (
      this.produto.cstIpi == CstIpi.cst00 ||
      this.produto.cstIpi == CstIpi.cst49 ||
      this.produto.cstIpi == CstIpi.cst50 ||
      this.produto.cstIpi == CstIpi.cst99
    ) {
      const result = this.ipi.calcula();
      this.valorBcIpi = result.baseCalculo;
      this.valorIpi = result.valor;
    }
  }

  private calcularPis() {
    this.pis = new TributacaoPis(this.produto, this.tipoDesconto);
    this.valorBcPis = 0;
    this.valorPis = 0;

    if (
      this.produto.cstPisCofins == CstPisCofins.cst01 ||
      this.produto.cstPisCofins == CstPisCofins.cst02
    ) {
      const result = this.pis.calcula();
      this.valorBcPis = result.baseCalculo;
      this.valorPis = result.valor;
    }
  }

  private calcularCofins() {
    this.cofins = new TributacaoCofins(this.produto, this.tipoDesconto);
    this.valorBcCofins = 0;
    this.valorCofins = 0;

    if (
      this.produto.cstPisCofins == CstPisCofins.cst01 ||
      this.produto.cstPisCofins == CstPisCofins.cst02
    ) {
      const result = this.cofins.calcula();
      this.valorBcCofins = result.baseCalculo;
      this.valorCofins = result.valor;
    }
  }

  private calcularIssqn(calcularRetencao: boolean) {
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

  private calcularFcp(): void {
    this.tributacaoFcp = new TributacaoFcp(this.produto, this.tipoDesconto);
    this.fcp = 0;
    this.valorBcFcp = 0;

    const result = this.tributacaoFcp.calcula();
    this.fcp = result.valor;
    this.valorBcFcp = result.baseCalculo;
  }

  private calcularDifal(): void {
    this.difal = new TributacaoDifal(this.produto, this.tipoDesconto);
    this.valorBcDifal = 0;
    this.valorDifal = 0;
    this.valorIcmsOrigem = 0;
    this.valorIcmsDestino = 0;

    if (
      this.tipoOperacao === TipoOperacao.operacaoInterestadual &&
      (this.cstGeraDifal(this.produto.cst) ||
        this.csosnGeraDifal(this.produto.csosn)) &&
      this.produto.percentualDifalInterna != 0 &&
      this.produto.percentualDifalInterestadual != 0
    ) {
      const result = this.difal.calcula();
      this.valorBcDifal = result.baseCalculo;
      this.valorDifal = result.difal;
      this.valorIcmsOrigem = result.valorIcmsOrigem;
      this.valorIcmsDestino = result.valorIcmsDestino;
    }
  }

  private calculaIbpt(): void {
    this.ibpt = new TributacaoIbpt(this.produto, this.produto);

    const result = this.ibpt.calcula();
    this.valorTributacaoEstadual = result.tributacaoEstadual;
    this.valorTributacaoFederal = result.tributacaoFederal;
    this.valorTributacaoFederalImportados = result.tributacaoFederalImportados;
    this.valorTributacaoMunicipal = result.tributacaoMunicipal;
    this.valorTotalTributos = result.valorTotalTributos;
  }

  private cstGeraDifal(cst: number): boolean {
    return cst == 0 || cst == 20 || cst == 40 || cst == 41 || cst == 60;
  }

  private csosnGeraDifal(csosn: number): boolean {
    return csosn == 102 || csosn == 103 || csosn == 400 || csosn == 500;
  }
}
