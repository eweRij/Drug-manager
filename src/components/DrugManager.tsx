import React, { useEffect, SyntheticEvent } from "react";

import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardContent,
  CardHeader,
  Box,
  Container,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";

// import { useAppDispatch } from "../utils/hooks";
import { setLogged } from "../features/user/userSlice";
import { AppDispatch } from "../store/store";
import { validate } from "../utils/drugManager_validation";
import { fetchUser } from "../features/user/userSlice";
import { addDrugToList } from "../utils/api";
import { useAppSelector } from "../utils/hooks";
import { getUserId, removeUserId } from "../utils/auth";
import { success_toast, warning_toast } from "../utils/toast";

import { Navigate } from "react-router-dom";
import { Window } from "@mui/icons-material";

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%",
  },
  header: {
    backgroundColor: "#F25E7A",
    color: "white",
    textAlign: "center",
  },
  container: {
    maxHeight: "70vh",
    marginBottom: "20px",
    overflow: "scroll",
  },
});
const DrugManager = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch<AppDispatch>();
  const user = useAppSelector((state) => state.user.userData);
  const id = getUserId();

  useEffect(() => {
    dispatch(fetchUser(id));
  }, []);

  const daytime_options = [
    {
      label: "morning",
      value: 1,
    },
    { label: "noon", value: 2 },
    { label: "evening", value: 3 },
  ];
  const posology_options = [
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
  const formik = useFormik({
    initialValues: {
      drug_name: "",
      when: 1,
      amount: 1,
      frequency: 1,
      additionalInfo: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const wrong_authentication = () => {
    warning_toast(
      "Ups...your session has finished! You need to log in once again.",
      false
    );
    removeUserId();
    setTimeout(() => {
      // window.location.reload();
      dispatch(setLogged());
      navigate("/");
      window.location.reload();
    }, 5000);
  };
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    formik.handleSubmit();
    addDrugToList(user._id, formik.values)
      .then((resp) =>
        success_toast("Great! New drug was added to the list.", true)
      )
      .catch((err) => err.response.status === 403 && wrong_authentication());
  };

  return (
    <Container sx={{ marginTop: "10vh" }}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Card sx={{ minWidth: 275 }} className={classes.container}>
        <CardHeader
          title={"Add you medication here"}
          className={classes.header}
        ></CardHeader>
        <CardContent>
          <Box
            sx={{
              "& .MuiTextField-root": { m: 5, width: "50ch" },
            }}
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            className={classes.form}
          >
            <TextField
              id="drug_name"
              label="Drug name"
              variant="standard"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.drug_name}
              error={
                formik.touched.drug_name && Boolean(formik.errors.drug_name)
              }
            />

            <TextField
              id="frequency"
              name="frequency"
              select
              label="How many times?"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.frequency}
              error={
                formik.touched.frequency && Boolean(formik.errors.frequency)
              }
              helperText="Please select how many times daily"
              variant="standard"
            >
              {posology_options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="amount"
              name="amount"
              select
              label="How many tablets?"
              onChange={formik.handleChange}
              value={formik.values.amount}
              error={formik.touched.amount && Boolean(formik.errors.amount)}
              helperText="Please select how many tablets"
              variant="standard"
            >
              {posology_options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="when"
              name="when"
              select
              label="When to take?"
              onChange={formik.handleChange}
              value={formik.values.when}
              error={formik.touched.when && Boolean(formik.errors.when)}
              helperText="Please select the daytime"
              variant="standard"
              disabled={formik.values.frequency > 1 ? true : false}
            >
              {daytime_options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="additionalInfo"
              label="Additional Information"
              variant="standard"
              multiline
              onChange={formik.handleChange}
              value={formik.values.additionalInfo}
              error={
                formik.touched.additionalInfo &&
                Boolean(formik.errors.additionalInfo)
              }
            />
            <Button
              component="button"
              size="large"
              color="info"
              variant="contained"
              type="submit"
            >
              Confirm
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default DrugManager;