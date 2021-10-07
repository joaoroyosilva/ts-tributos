export enum Csosn {
  csosn101 = 101,
  csosn102 = 102,
  csosn103 = 103,
  csosn201 = 201,
  csosn202 = 202,
  csosn203 = 203,
  csosn300 = 300,
  csosn400 = 400,
  csosn500 = 500,
  csosn900 = 900,
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
