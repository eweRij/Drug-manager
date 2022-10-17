import { Drug, DrugGroup } from "../types/drug";

export const selectImage = (select: number): string => {
  switch (select) {
    case DrugGroup.Other: {
      console.log(DrugGroup[DrugGroup.Other]);
      return DrugGroup[DrugGroup.Other];
    }
    case DrugGroup.Antibiotics: {
      return DrugGroup[DrugGroup.Antibiotics];
    }
    case DrugGroup.Arrythmia: {
      return DrugGroup[DrugGroup.Arrythmia];
    }
    case DrugGroup.Artherosclerosis: {
      return DrugGroup[DrugGroup.Artherosclerosis];
    }
    case DrugGroup.Cataract: {
      return DrugGroup[DrugGroup.Cataract];
    }
    case DrugGroup.Contraception: {
      return DrugGroup[DrugGroup.Contraception];
    }
    case DrugGroup.CoronaryDisease: {
      return DrugGroup[DrugGroup.CoronaryDisease];
    }
    case DrugGroup.Diabetes: {
      return DrugGroup[DrugGroup.Diabetes];
    }
    case DrugGroup.Glaucoma: {
      return DrugGroup[DrugGroup.Glaucoma];
    }
    case DrugGroup.Gout: {
      return DrugGroup[DrugGroup.Gout];
    }
    case DrugGroup.Hypertension: {
      return DrugGroup[DrugGroup.Hypertension];
    }
    case DrugGroup.Migrene: {
      return DrugGroup[DrugGroup.Migrene];
    }
    case DrugGroup.Osteoporosis: {
      return DrugGroup[DrugGroup.Osteoporosis];
    }
    case DrugGroup.ProtonPompInhibitors: {
      return DrugGroup[DrugGroup.ProtonPompInhibitors];
    }
    case DrugGroup.Rheumatism: {
      return DrugGroup[DrugGroup.Rheumatism];
    }
    case DrugGroup.ColdAndFlu: {
      return DrugGroup[DrugGroup.ColdAndFlu];
    }
    case DrugGroup.Allergy: {
      return DrugGroup[DrugGroup.Allergy];
    }
    case DrugGroup.Asthma: {
      return DrugGroup[DrugGroup.Asthma];
    }
    case DrugGroup.Intima: {
      return DrugGroup[DrugGroup.Intima];
    }

    default: {
      return "";
    }
  }
};
export const morningDrugs = (drugs: any): Array<Drug> => {
  return drugs.filter((drug: any) => {
    return drug.when.includes(1);
  });
};

export const noonDrugs = (drugs: any): Array<Drug> => {
  return drugs.filter((drug: any) => {
    return drug.when.includes(2);
  });
};
export const eveningDrugs = (drugs: any): Array<Drug> => {
  return drugs.filter((drug: any) => {
    return drug.when.includes(3);
  });
};
