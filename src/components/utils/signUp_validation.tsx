import { useFormik } from "formik";

type UserDataSignUp = {
  first_name: string;
  last_name: string;
  login: string;
  password: string;
  confirmation: string;
};

export const validate = (values: UserDataSignUp) => {
  const errors: UserDataSignUp = {
    first_name: "",
    last_name: "",
    login: "",
    password: "",
    confirmation: "",
  };

  if (!values.first_name) {
    errors.first_name = "Required";
  }
  if (!values.last_name) {
    errors.last_name = "Required";
  }
  if (!values.login) {
    errors.login = "Required";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be 8 characters or less";
  }
  if (!values.confirmation) {
    errors.confirmation = "Required";
  } else if (values.password !== values.confirmation) {
    errors.confirmation = "Doesn't match the password given above";
  }

  return errors;
};
