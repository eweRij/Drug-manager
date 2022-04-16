import React from "react";

import { Card, CardContent, CardHeader, Box, Container } from "@mui/material";

const DrugManager = () => {
  return (
    <Container sx={{ maxWidth: "70%", marginTop: "15vh" }}>
      <Card>
        <CardHeader
          title={"Your Profile"}
          sx={{ textAlign: "center" }}
        ></CardHeader>
        <CardContent>
          <Box
            component="h2"
            sx={{
              display: "block",
            }}
          >
            This is your drug manager
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default DrugManager;
