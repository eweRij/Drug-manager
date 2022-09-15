import { UserDataSignIn } from "../types/user";

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
