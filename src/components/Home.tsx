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
import { givePosology } from "../utils/posology";
import {
  eveningDrugs,
  morningDrugs,
  noonDrugs,
  selectImage,
} from "../utils/home";
import DayDrugsCard from "./DayDrugsCard";

const Home: React.FC = () => {
  const user: UserData = useAppSelector((state) => state.user.userData);
  const drugs: Drug[] | undefined = user?.drugs;
  console.log(drugs);
  const classes = useStyles();
  const sortedDrugs = [
    { header: "Morning", drugs: morningDrugs(drugs) },
    { header: "Noon", drugs: noonDrugs(drugs) },
    { header: "Evening", drugs: eveningDrugs(drugs) },
  ];
  // const dayTimes=[{header:'morning',
  // morningDrugs:drugs?.filter((drug)=>{
  //   return drug
  // })}]
  return (
    <Container sx={{ marginTop: "10vh" }}>
      <Card sx={{ overflowY: "scroll" }} className={classes.container}>
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
            {sortedDrugs.map((el, id) => {
              return (
                <DayDrugsCard
                  key={id}
                  header={el.header}
                  drugsToTake={el.drugs}
                ></DayDrugsCard>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Home;
