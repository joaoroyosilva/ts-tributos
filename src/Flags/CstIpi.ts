export enum CstIpi {
  cst00 = 1,
  cst01 = 2,
  cst02 = 3,
  cst03 = 4,
  cst04 = 5,
  cst05 = 6,
  cst49 = 7,
  cst50 = 8,
  cst51 = 9,
  cst52 = 10,
  cst53 = 11,
  cst54 = 12,
  cst55 = 13,
  cst99 = 14,
}

export const CstIpiLabel = new Map<number, string>([
  [CstIpi.cst00, '00 - Entrada com Recuperação de Crédito'],
  [CstIpi.cst01, '01 - Entrada Tributada com Alíquota Zero'],
  [CstIpi.cst02, '02 - Entrada Isenta'],
  [CstIpi.cst03, '03 - Entrada Não Tributada'],
  [CstIpi.cst04, '04 - Entrada Imune'],
  [CstIpi.cst05, '05 - Entrada com Suspensão'],
  [CstIpi.cst49, '49 - Outras Entradas'],
  [CstIpi.cst50, '50 - Saída Tributada'],
  [CstIpi.cst51, '51 - Saída Tributável com Alíquota Zero'],
  [CstIpi.cst52, '52 - Saída Isenta'],
  [CstIpi.cst53, '53 - Saída Não Tributada'],
  [CstIpi.cst54, '54 - Saída Imune'],
  [CstIpi.cst55, '55 - Saída com Suspensão'],
  [CstIpi.cst99, '99 - Outras Saídas'],
]);
