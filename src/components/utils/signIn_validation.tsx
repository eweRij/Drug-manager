import { Formik, useFormik } from "formik";

type UserDataSignIn = {
  login: string;
  password: string;
};

type UserDataSignUp = {
  first_name: string;
  last_name: string;
  login: string;
  password: string;
};

export const validate = (values: UserDataSignIn) => {
  const errors: UserDataSignIn = {
    login: "",
    password: "",
  };
  if (!values.login) {
    errors.login = "Required";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be 8 characters or less";
  }
  return errors;
};
const validate_signUp = (values: UserDataSignUp) => {
  const errors: UserDataSignUp = {
    first_name: "",
    last_name: "",
    login: "",
    password: "",
  };
  if (!values.login) {
    errors.login = "Required";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be 8 characters or less";
  }
  return errors;
};
