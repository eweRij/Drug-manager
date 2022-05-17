import { Formik, useFormik } from "formik";
import { UserDataEdit } from "../types/user";

export const validate = (values: UserDataEdit) => {
  const errors: UserDataEdit = {
    first_name: "",
    last_name: "",
  };
  if (!values.first_name) {
    errors.first_name = "Required";
  }

  if (!values.last_name) {
    errors.last_name = "Required";
  }
  return errors;
};
