import { Produto } from '../src/Entidade/produto';
import { Crt } from '../src/Flags/Crt';
import { Cst } from '../src/Flags/Cst';
import { TipoOperacao } from '../src/Flags/TipoOperacao';
import { TipoPessoa } from '../src/Flags/TipoPessoa';
import { ResultadoTributacao } from '../src/Impostos/Implementacoes/ResultadoTributacao';
import { TributacaoTribRegular } from '../src/Impostos/Tributacoes/TributacaoTribRegular';

// O tsconfig da lib não habilita resolveJsonModule (module = es2015) e @types/node fica de
// fora de propósito (quebrava o build). Declarar o `require` aqui é o caminho que não exige
// mexer em nenhum dos dois.
declare const require: (caminho: string) => any;

interface VetorEntrada {
  possuiTributacaoRegular: boolean;
  baseCalculo: number;
  percentualRegularIbsUf: number;
  reducaoRegularIbsUf: number;
  percentualRegularIbsMun: number;
  reducaoRegularIbsMun: number;
  percentualRegularCbs: number;
  reducaoRegularCbs: number;
}

interface VetorEsperado {
  percentualEfetivoRegIbsUf: number;
  valorTribRegIbsUf: number;
  percentualEfetivoRegIbsMun: number;
  valorTribRegIbsMun: number;
  percentualEfetivoRegCbs: number;
  valorTribRegCbs: number;
}

interface Vetor {
  id: string;
  descricao: string;
  entrada: VetorEntrada;
  esperado: VetorEsperado;
}

const vetores: Vetor[] = require('./fixtures/tributacao-regular-vectors.json').vetores;

/**
 * Tributação regular (`gTribRegular`) — os vetores canônicos são os MESMOS rodados pela
 * `php-tributos` (arquivo idêntico byte a byte). É esse par de suítes que sustenta o requisito
 * de paridade da spec `rtc-tributacao-regular`. Ao mexer nos vetores, mexer nos dois repos.
 */
describe('Tributacao regular — vetores canonicos', () => {
  vetores.forEach((vetor) => {
    it(`${vetor.id}: ${vetor.descricao}`, () => {
      const produto = new Produto();
      produto.possuiTributacaoRegular = vetor.entrada.possuiTributacaoRegular;
      produto.percentualRegularIbsUf = vetor.entrada.percentualRegularIbsUf;
      produto.reducaoRegularIbsUf = vetor.entrada.reducaoRegularIbsUf;
      produto.percentualRegularIbsMun = vetor.entrada.percentualRegularIbsMun;
      produto.reducaoRegularIbsMun = vetor.entrada.reducaoRegularIbsMun;
      produto.percentualRegularCbs = vetor.entrada.percentualRegularCbs;
      produto.reducaoRegularCbs = vetor.entrada.reducaoRegularCbs;

      const resultado = new TributacaoTribRegular(produto).calculaSobreBase(
        vetor.entrada.baseCalculo
      );

      expect(resultado.percentualEfetivoRegIbsUf).toBe(vetor.esperado.percentualEfetivoRegIbsUf);
      expect(resultado.valorTribRegIbsUf).toBe(vetor.esperado.valorTribRegIbsUf);
      expect(resultado.percentualEfetivoRegIbsMun).toBe(vetor.esperado.percentualEfetivoRegIbsMun);
      expect(resultado.valorTribRegIbsMun).toBe(vetor.esperado.valorTribRegIbsMun);
      expect(resultado.percentualEfetivoRegCbs).toBe(vetor.esperado.percentualEfetivoRegCbs);
      expect(resultado.valorTribRegCbs).toBe(vetor.esperado.valorTribRegCbs);
    });
  });
});

describe('Tributacao regular — calculo integrado', () => {
  it('usa a mesma base do IBS/CBS do item', () => {
    const produto = new Produto();
    produto.cst = Cst.cst00;
    produto.quantidadeProduto = 1;
    produto.valorProduto = 1000;

    // Alíquotas do item zeradas: é o que a NT exige de um item com tributação regular.
    produto.percentualCbs = 0;
    produto.percentualIbsUf = 0;
    produto.percentualIbsMun = 0;

    produto.possuiTributacaoRegular = true;
    produto.percentualRegularIbsUf = 11.2;
    produto.percentualRegularIbsMun = 1.8;
    produto.percentualRegularCbs = 8.8;

    const resultado = new ResultadoTributacao(
      produto,
      Crt.regimeNormal,
      TipoOperacao.operacaoInterna,
      TipoPessoa.juridica
    ).calcular();

    expect(resultado.baseCalculoTribRegular).toBe(resultado.baseCalculoCbs);
    expect(resultado.valorEfetivoCbs).toBe(0);
    expect(resultado.valorTribRegCbs).toBe(88.0);
    expect(resultado.valorTribRegIbsUF).toBe(112.0);
    expect(resultado.valorTribRegIbsMun).toBe(18.0);
  });
});
