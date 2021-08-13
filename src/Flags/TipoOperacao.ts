export enum TipoOperacao {
  operacaoInterna = 1,
  operacaoInterestadual = 2,
  operacaoExterior = 3,
}

export const TipoOperacaoLabel = new Map<number, string>([
  [TipoOperacao.operacaoInterna, '1 - Operação interna'],
  [TipoOperacao.operacaoInterestadual, '2 - Operação interestadual'],
  [TipoOperacao.operacaoExterior, '3 -Operação com exterior'],
]);
