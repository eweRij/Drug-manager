import React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  Box,
  Container,
  Button,
  CardActions,
  Link,
} from "@mui/material";

const Main = () => {
  return (
    <Container sx={{ maxWidth: "70%", marginTop: "15vh" }}>
      <Card>
        <CardHeader
          title={"Welcome!"}
          sx={{ textAlign: "center" }}
        ></CardHeader>
        <CardContent>
          <Box
            component="h2"
            sx={{
              display: "block",
            }}
          >
            This is your list of medication
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Main;
