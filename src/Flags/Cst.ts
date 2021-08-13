export enum Cst {
  cst00 = 1,
  cst10 = 2,
  cst20 = 3,
  cst30 = 4,
  cst40 = 5,
  cst41 = 6,
  cst50 = 7,
  cst51 = 8,
  cst60 = 9,
  cst70 = 10,
  cst90 = 11,
}

export const CstLabel = new Map<number, string>([
  [Cst.cst00, '00 - Tributada integralmente.'],
  [
    Cst.cst10,
    '10 - Tributada e com cobrança do ICMS por substituição tributária.',
  ],
  [Cst.cst20, '20 - Com redução de Base de Cálculo.'],
  [
    Cst.cst30,
    '30 - Isenta ou não tributada e com cobrança do ICMS por substituição tributária.',
  ],
  [Cst.cst40, '40 - Isenta.'],
  [Cst.cst41, '41 - Não tributada.'],
  [Cst.cst50, '50 - Com suspensão.'],
  [Cst.cst51, '51 - Com diferimento.'],
  [Cst.cst60, '60 - ICMS cobrado anteriormente por substituição tributária.'],
  [
    Cst.cst70,
    '70 - Com redução da Base de Cálculo e cobrança do ICMS por substituição tributária.',
  ],
  [Cst.cst90, '90 - Outras.'],
]);
