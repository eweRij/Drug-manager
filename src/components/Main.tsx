import React, { Dispatch } from "react";

import { Card, CardContent, CardHeader, Box, Container } from "@mui/material";

import { useStyles } from "../classes/classes";
import { UserData } from "../types/user";
import { Drug } from "../types/drug";
import { useAppSelector } from "../utils/hooks";

const Main: React.FC = () => {
  const user: UserData = useAppSelector((state) => state.user.userData);
  console.log(user);
  const drugs: Drug[] | undefined = user && user.drugs;
  console.log(drugs);
  const classes = useStyles();
  return (
    <Container sx={{ marginTop: "15vh" }}>
      <Card className={classes.container}>
        <CardHeader
          title={"Welcome!"}
          sx={{ textAlign: "center" }}
          className={classes.header}
        ></CardHeader>
        <CardContent>
          {/* <Box
            component="h2"
            sx={{
              display: "block",
            }}
          > */}
          This is your list of medication
          <ul>
            {drugs &&
              drugs.map((el, id) => {
                console.log(el);
                return <li key={id}>{el.drug_name}</li>;
              })}
          </ul>
          {/* </Box> */}
        </CardContent>
      </Card>
    </Container>
  );
};

export default Main;
