export enum TipoPessoa {
  fisica,
  juridica,
}

export const TipoPessoaLabel = new Map<number, string>([
  [TipoPessoa.fisica, 'Física'],
  [TipoPessoa.juridica, 'Jurídica'],
]);
