export enum Crt {
  simplesNacional = 1,
  simplesNacionalExcesso = 2,
  regimeNormal = 3,
}

export const CrtLabel = new Map<number, string>([
  [Crt.simplesNacional, '1 - Simples Nacional'],
  [
    Crt.simplesNacionalExcesso,
    '2 - Simples Nacional 0 Execsso de Sublimite de Receita Bruta',
  ],
  [Crt.regimeNormal, '3 - Regime Normal'],
]);
