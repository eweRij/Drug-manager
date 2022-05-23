import React, { SyntheticEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  Card,
  CardContent,
  CardHeader,
  Box,
  Container,
  TextField,
  SvgIconTypeMap,
} from "@mui/material";
import AlternateEmailTwoToneIcon from "@mui/icons-material/AlternateEmailTwoTone";
import BadgeTwoToneIcon from "@mui/icons-material/BadgeTwoTone";
import MedicationTwoToneIcon from "@mui/icons-material/MedicationTwoTone";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import ModeEditOutlineTwoToneIcon from "@mui/icons-material/ModeEditOutlineTwoTone";

import {
  Avatar,
  IconButton,
  List,
  ListItemIcon,
  ListItem,
  Typography,
  Grid,
  ListItemText,
} from "@material-ui/core";
import { Button } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

import { fetchUser } from "../store/features/user/userSlice";
import { useAppSelector } from "../utils/hooks";
import { error_toast, warning_toast } from "../utils/toast";
import { editUserNames, setAvatar } from "../utils/api";
import { Navigate, useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useStyles } from "../classes/classes";
import { useFormik } from "formik";
import { validate } from "../utils/edit_validation";

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const id = useAppSelector((state) => state.user.isLogged);
  const user = useAppSelector((state) => state.user.userData);
  const [show, setShow] = useState<boolean>(false);
  const [elementToEdit, setElementToEdit] = useState<string>("");

  const USER_DATA = user && [
    {
      name: user.first_name + " " + user.last_name,
      icon: <BadgeTwoToneIcon />,
    },
    {
      name: user.email,
      icon: <AlternateEmailTwoToneIcon />,
    },
  ];

  useEffect(() => {
    dispatch(fetchUser(id));
  }, []);

  const handleShow = (name: string): void => {
    setElementToEdit(name);
    setShow((prev) => !prev);
  };

  const formikNames = useFormik({
    initialValues: {
      first_name: user && user.first_name,
      last_name: user && user.last_name,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const formikEmail = useFormik({
    initialValues: {
      email: user && user.email,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const handleSetAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    setAvatar(id, files)
      .then(() => {
        dispatch(fetchUser(id));
      })
      .catch((err) => {
        if (err.response.status === 500) {
          error_toast("File size cannot be larger than 2MB!", true);
        } else if (err.response.status === 403) {
          warning_toast("Session has finished. You need to log in!", true);
          navigate("/");
        }
      });
  };
  const handleEditUserNames = (e: SyntheticEvent) => {
    e.preventDefault();
    formikNames.handleSubmit();
    console.log(formikNames.values);
    editUserNames(
      id,
      formikNames.values.first_name,
      formikNames.values.last_name
    )
      .then(() => {
        dispatch(fetchUser(id));
        setShow(false);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          warning_toast("Session has finished. You need to log in!", true);
          navigate("/");
        }
      });
  };

  return (
    <Container sx={{ marginTop: "10vh" }}>
      <Card sx={{ minWidth: 275 }} className={classes.container}>
        <CardHeader
          className={classes.header}
          title={"Your profile"}
        ></CardHeader>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <div className={classes.avatar}>
                <h2>Hi {user && user.first_name}!</h2>
                <input
                  onChange={(e) => {
                    handleSetAvatar(e);
                  }}
                  accept="image/*"
                  className={classes.input}
                  id="icon-button-file"
                  type="file"
                  name="avatar"
                />
                <label htmlFor="icon-button-file">
                  <Avatar
                    src={user.avatar && user.avatar}
                    className={classes.large}
                  />
                </label>
              </div>
            </Grid>
            <Grid className={classes.dataContainer} item xs={12} md={6}>
              {!show ? (
                <List dense={false}>
                  {USER_DATA.map((el, id) => {
                    let component = el.icon;
                    return (
                      <ListItem className={classes.listItem} key={id}>
                        <ListItemIcon>{component}</ListItemIcon>
                        <ListItemText primary={el.name} />
                        <ListItemIcon>
                          <ModeEditOutlineTwoToneIcon
                            className={classes.editButton}
                            onClick={(e) => handleShow(el.name)}
                          />
                        </ListItemIcon>
                      </ListItem>
                    );
                  })}
                </List>
              ) : (
                <Box
                  sx={{
                    "& .MuiTextField-root": { m: 5 },
                  }}
                  component="form"
                  noValidate
                  autoComplete="off"
                  onSubmit={handleEditUserNames}
                  className={classes.form}
                >
                  {elementToEdit === user.email ? (
                    <TextField
                      sx={{
                        marginBottom: " !important",
                        marginTop: "0 !important",
                      }}
                      id="email"
                      label="Email"
                      variant="standard"
                      type="email"
                      onChange={formikEmail.handleChange}
                      value={formikEmail.values.email}
                      error={
                        formikEmail.touched.email &&
                        Boolean(formikEmail.errors.email)
                      }
                    />
                  ) : (
                    <>
                      <TextField
                        sx={{
                          marginBottom: " !important",
                          marginTop: "0 !important",
                        }}
                        id="first_name"
                        label="First name"
                        variant="standard"
                        type="text"
                        onChange={formikNames.handleChange}
                        value={formikNames.values.first_name}
                        error={
                          formikNames.touched.first_name &&
                          Boolean(formikNames.errors.first_name)
                        }
                      />
                      <TextField
                        sx={{
                          marginBottom: "1rem !important",
                          marginTop: "0 !important",
                        }}
                        id="last_name"
                        label="Last name"
                        variant="standard"
                        type="text"
                        onChange={formikNames.handleChange}
                        value={formikNames.values.last_name}
                        error={
                          formikNames.touched.last_name &&
                          Boolean(formikNames.errors.last_name)
                        }
                      />
                    </>
                  )}
                  <Button
                    component="button"
                    color="success"
                    size="small"
                    variant="contained"
                    type="submit"
                  >
                    Confirm
                  </Button>
                </Box>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Profile;
