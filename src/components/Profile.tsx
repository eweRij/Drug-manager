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

const Profile = () => {
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
            This is your profile
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Profile;
