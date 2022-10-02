export interface Drug {
  drug_name: string;
  when?: number;
  amount: number;
  frequency: number;
  drug_group: number;
  additionalInfo?: string;
}

export enum DrugGroup {
  Other = 1,
  Allergy,
  Antibiotics,
  Arrythmia,
  Artherosclerosis,
  Asthma,
  ColdAndFlu,
  Cataract,
  Contraception,
  CoronaryDisease,
  Diabetes,
  Glaucoma,
  Gout,
  Hypertension,
  Intima,
  Migrene,
  Osteoporosis,
  ProtonPompInhibitors,
  Rheumatism,
}
