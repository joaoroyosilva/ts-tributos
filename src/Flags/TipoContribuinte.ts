export enum TipoContribuinte {
  contribuinte = 1,
  isento = 2,
  naoContribuinte = 3,
}

export const TipoContribuinteLabel = new Map<number, string>([
  [TipoContribuinte.contribuinte, '1 - Contribuinte de ICMS.'],
  [TipoContribuinte.isento, '2 - Contribuinte isento.'],
  [TipoContribuinte.naoContribuinte, '9 - Não Contribuinte.'],
]);
