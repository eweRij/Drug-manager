import "react-toastify/dist/ReactToastify.css";

import { Drug } from "../types/drug";

export const validate = (values: Drug) => {
  const errors = {
    drug_name: "",
    when: "",
    amount: "",
    frequency: "",
    drug_group: "",
    additionalInfo: "",
  };

  if (!values.drug_name) {
    errors.drug_name = "Required";
  }
  if (!values.amount) {
    errors.amount = "Required";
  }
  if (!values.frequency) {
    errors.frequency = "Required";
  }
  if (!values.frequency) {
    errors.drug_group = "Required";
  }

  return errors;
};

export const daytime_options = [
  {
    label: "morning",
    value: 1,
  },
  { label: "noon", value: 2 },
  { label: "evening", value: 3 },
];

export const posology_options = [
  {
    label: "1",
    value: 1,
  },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6", value: 6 },
];
export const drug_group_options = [
  {
    label: "Other",
    value: 1,
  },
  { label: "Hypertension", value: 2 },
  { label: "Arrhythmia", value: 3 },
  { label: "Atherosclerosis", value: 4 },
  { label: "Proton pomp inhibitors", value: 5 },
  { label: "Depression", value: 6 },
  { label: "Antibiotics", value: 7 },
  { label: "Fungal disease", value: 8 },
  { label: "Contraception", value: 9 },
  { label: "Osteoporosis", value: 10 },
  {
    label: "Diabetes",
    value: 11,
  },
];
