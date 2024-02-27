export enum TipoCalculoIcmsDesonerado {
  BaseSimples,
  BasePorDentro,
}

export const TipoCalculoIcmsDesoneradoLabel = new Map<number, string>([
  [TipoCalculoIcmsDesonerado.BaseSimples, 'Base Simples'],
  [TipoCalculoIcmsDesonerado.BasePorDentro, 'Base Por Dentro'],
]);
