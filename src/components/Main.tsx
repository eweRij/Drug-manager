import React, { Dispatch } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
  CardActions,
  CardMedia,
  Button,
} from "@mui/material";

import { useStyles } from "../classes/classes";
import { UserData } from "../types/user";
import { Drug } from "../types/drug";
import { useAppSelector } from "../utils/hooks";

const Main: React.FC = () => {
  const user: UserData = useAppSelector((state) => state.user.userData);
  const drugs: Drug[] | undefined = user && user.drugs;
  const classes = useStyles();

  const givePosology = (value: number | undefined): string => {
    let result;
    if (value === 1) {
      result = "in the morning.";
    } else if (value === 2) {
      result = "at noon.";
    } else {
      result = "in the evening";
    }
    return result;
  };

  return (
    <Container sx={{ marginTop: "15vh" }}>
      <Card className={classes.container}>
        <CardHeader
          title={"Welcome!"}
          sx={{ textAlign: "center" }}
          className={classes.header}
        ></CardHeader>
        <CardContent className={classes.cardContainer}>
          <Typography gutterBottom variant="h6" component="div">
            Your medication
          </Typography>
          <ul className={classes.drugList}>
            {drugs &&
              drugs.map((el, id) => {
                return (
                  <li style={{ listStyle: "none" }} key={id}>
                    <Card className={classes.drugCard}>
                      <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="drug category"
                      />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          height: "60%",
                        }}
                      >
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {el.drug_name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {el.frequency === 1 ? (
                              <>
                                Posology: {el.amount} tablet/s{" "}
                                {givePosology(el.when)}
                              </>
                            ) : (
                              <>
                                Posology : {el.amount} tablet {el.frequency}
                                <br></br>Additional Information:{" "}
                                {el.additionalInfo}
                              </>
                            )}
                          </Typography>
                        </CardContent>
                        <CardActions sx={{ alignSelf: "flex-end" }}>
                          <Button size="small">Edit</Button>
                        </CardActions>
                      </div>
                    </Card>
                  </li>
                );
              })}
          </ul>
          {/* </Box> */}
        </CardContent>
      </Card>
    </Container>
  );
};

export default Main;
