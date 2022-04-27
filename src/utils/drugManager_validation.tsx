import { useFormik } from "formik";
import { Drug } from "../types/drug";

export const validate = (values: Drug) => {
  const errors = {
    drug_name: "",
    when: "",
    amount: "",
    frequency: "",
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

  return errors;
};
