export enum Csosn {
  csosn101 = 1,
  csosn102 = 2,
  csosn103 = 3,
  csosn201 = 4,
  csosn202 = 5,
  csosn203 = 6,
  csosn300 = 7,
  csosn400 = 8,
  csosn500 = 9,
  csosn900 = 10,
}

export const CsosnLabel = new Map<number, string>([
  [
    Csosn.csosn101,
    '101 - Tributada pelo Simples Nacional com permissão de crédito',
  ],
  [
    Csosn.csosn102,
    '102 - Tributada pelo Simples Nacional sem permissão de crédito',
  ],
  [
    Csosn.csosn103,
    '103 - Isenção do ICMS no Simples Nacional para faixa de receita bruta',
  ],
  [
    Csosn.csosn201,
    '201 - Tributada pelo Simples Nacional com permissão de crédito e com cobrança do ICMS substituição tributária',
  ],
  [
    Csosn.csosn202,
    '202 - Tributada pelo Simples Nacional sem permissão de crédito e com cobrança do ICMS substituição tributária',
  ],
  [
    Csosn.csosn203,
    '203 - Isenção do ICMS no Simples Nacional para faixa de receita bruta e com cobrança do ICMS por substituição tributária',
  ],
  [Csosn.csosn300, '300 - Imune'],
  [Csosn.csosn400, '400 - Não tributada pelo Simples Nacional'],
  [
    Csosn.csosn500,
    '500 - ICMS cobrado anteriormente por substituição tributária',
  ],
  [Csosn.csosn900, '900 - Outros'],
]);
