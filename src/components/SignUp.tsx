import { ReactEventHandler, SyntheticEvent, useState } from "react";
import Auth from "./Auth";
import { Container, TextField } from "@mui/material";
import { validate } from "../utils/signUp_validation";
import { useFormik } from "formik";
import { UserDataSignIn, UserDataSignUp } from "../types/user";
import { userRegister } from "../utils/api";

const SignUp = () => {
  const [user, setUser] = useState<UserDataSignUp>({
    first_name: "",
    last_name: "",
    login: "",
    email: "",
    password: "",
    confirmation: "",
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      login: "",
      password: "",
      confirmation: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleSignUp = (e: SyntheticEvent) => {
    e.preventDefault();
    formik.handleSubmit();
    userRegister(formik.values)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <Container maxWidth="sm" sx={{ marginTop: "10vh" }}>
      <Auth
        title="Sign up"
        button_title="SIGN UP"
        further_action="If you are already registered"
        route="/"
        onSubmit={handleSignUp}
      >
        <TextField
          margin="normal"
          color="secondary"
          id="first_name"
          label="First name"
          type="text"
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.first_name}
          helperText={formik.touched.first_name && formik.errors.first_name}
          error={formik.touched.first_name && Boolean(formik.errors.first_name)}
        />
        <TextField
          margin="normal"
          color="secondary"
          id="last_name"
          label="Last name"
          fullWidth
          type="text"
          onChange={formik.handleChange}
          value={formik.values.last_name}
          error={formik.touched.last_name && Boolean(formik.errors.last_name)}
          helperText={formik.touched.last_name && formik.errors.last_name}
        />
        <TextField
          margin="normal"
          color="secondary"
          id="login"
          label="Login"
          type="text"
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.login}
          helperText={formik.touched.login && formik.errors.login}
          error={formik.touched.login && Boolean(formik.errors.login)}
        />
        <TextField
          margin="normal"
          color="secondary"
          id="email"
          label="Email"
          fullWidth
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          margin="normal"
          color="secondary"
          id="password"
          label="Password"
          fullWidth
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          margin="normal"
          color="secondary"
          id="confirmation"
          label="Password confirmation"
          fullWidth
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirmation}
          error={
            formik.touched.confirmation && Boolean(formik.errors.confirmation)
          }
          helperText={formik.touched.confirmation && formik.errors.confirmation}
        />
      </Auth>
    </Container>
  );
};

export default SignUp;
