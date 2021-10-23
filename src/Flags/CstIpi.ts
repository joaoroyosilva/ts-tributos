export enum CstIpi {
  cst00 = 0,
  cst01 = 1,
  cst02 = 2,
  cst03 = 3,
  cst04 = 4,
  cst05 = 5,
  cst49 = 49,
  cst50 = 50,
  cst51 = 51,
  cst52 = 52,
  cst53 = 53,
  cst54 = 54,
  cst55 = 55,
  cst99 = 99,
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
