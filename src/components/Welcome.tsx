import React, { useEffect } from "react";

import {
  Card,
  Container,
  CardContent,
  CardHeader,
  Box,
  CardActions,
  Link,
} from "@mui/material";

import { verifyUser } from "../utils/api";
import { useMatch } from "react-router-dom";

const Welcome: React.FC = () => {
  const props = useMatch("/confirm/:confirmationCode");
  useEffect(() => {
    verifyUser(props?.params.confirmationCode);
  });
  return (
    <Container maxWidth="sm" sx={{ marginTop: "40vh" }}>
      <Card sx={{ minWidth: 275 }}>
        <CardHeader
          title={"Welcome on the board"}
          sx={{ textAlign: "center" }}
        ></CardHeader>
        <CardContent>
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p>Your account was successfull created. Well done!</p>
          </Box>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ marginRight: "10px" }}>To log in </p>
            <Link href={"/"} sx={{ cursor: "pointer" }}>
              CLICK HERE
            </Link>
          </CardActions>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Welcome;
