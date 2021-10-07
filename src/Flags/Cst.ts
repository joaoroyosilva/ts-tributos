export enum Cst {
  cst00 = 0,
  cst10 = 10,
  cst20 = 20,
  cst30 = 30,
  cst40 = 40,
  cst41 = 41,
  cst50 = 50,
  cst51 = 51,
  cst60 = 60,
  cst70 = 70,
  cst90 = 90,
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
