import React from "react";

import { Card, CardContent, CardHeader, Box, Container } from "@mui/material";

import { useStyles } from "../classes/classes";

const Main: React.FC = () => {
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
          {/* </Box> */}
        </CardContent>
      </Card>
    </Container>
  );
};

export default Main;
