export enum OrigemMercadoria {
  nacional = 0,
  estrangeiraImportacaoDireta = 1,
  estrangeiraInterna = 2,
  nacionalImportacaoSuperior40 = 3,
  nacionalConformidadeBasicas = 4,
  nacionalImportacaoInferior40 = 5,
  estrangeiraImportacaoDiretaSemSimilar = 6,
  estrangeiraInternaSemSimiliar = 7,
  nacionalImportacaoSuperior70 = 8,
}

export const OrigemMercadoriaLabel = new Map<number, string>([
  [OrigemMercadoria.nacional, 'Nacional'],
  [
    OrigemMercadoria.estrangeiraImportacaoDireta,
    'Estrangeira Importação Direta',
  ],
  [OrigemMercadoria.estrangeiraInterna, 'Estrangeira Interna'],
  [
    OrigemMercadoria.nacionalImportacaoSuperior40,
    'Nacional Importação Inferior 40',
  ],
  [
    OrigemMercadoria.nacionalConformidadeBasicas,
    'Nacional Confirmidade Básicas',
  ],
  [
    OrigemMercadoria.nacionalImportacaoInferior40,
    'Nacional Importação Inferior 40',
  ],
  [
    OrigemMercadoria.estrangeiraImportacaoDiretaSemSimilar,
    'Estrangeira Importação Direta Sem Similar',
  ],
  [
    OrigemMercadoria.estrangeiraInternaSemSimiliar,
    'Estrangeira Interna Sem Similar',
  ],
  [
    OrigemMercadoria.nacionalImportacaoSuperior70,
    'Nacional Importação Superior 70',
  ],
]);
