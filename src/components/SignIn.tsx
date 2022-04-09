import React, { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField } from "@mui/material";
import Auth from "./Auth";
import { validate } from "../utils/signIn_validation";
import { useFormik } from "formik";
import { userLogin } from "../utils/api";

const SignIn = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleSignIn = (e: SyntheticEvent) => {
    e.preventDefault();
    formik.handleSubmit();
    userLogin(formik.values).then((data) => {
      console.log(data);
      navigate("/home");
    });
  };
  console.log(formik.values);
  return (
    <Container maxWidth="sm" sx={{ marginTop: "25vh" }}>
      <Auth
        title="Sign in"
        button_title="SIGN IN"
        further_action="If you are not register"
        route="/register"
        onSubmit={handleSignIn}
      >
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
          id="password"
          label="Password"
          fullWidth
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
      </Auth>
    </Container>
  );
};

export default SignIn;
