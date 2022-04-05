import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Box,
  Button,
  CardActions,
  Link,
} from "@mui/material";

interface Props {
  title: string;
  button_title: string;
  further_action: string;
  route: string;
  onSubmit: any;
}
const Auth: React.FC<Props> = ({
  title,
  button_title,
  further_action,
  route,
  onSubmit,
  children,
}) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader title={title} sx={{ textAlign: "center" }}></CardHeader>
      <CardContent>
        <Box
          component="form"
          sx={{
            display: "block",
          }}
          noValidate
          autoComplete="off"
          onSubmit={onSubmit}
        >
          {children}
          <Button
            component="button"
            size="large"
            color="secondary"
            variant="contained"
            type="submit"
          >
            {button_title}
          </Button>
        </Box>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ marginRight: "10px" }}>{further_action}</p>
          <Link href={route} sx={{ cursor: "pointer" }}>
            CLICK HERE
          </Link>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Auth;
