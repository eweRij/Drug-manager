import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import React from "react";
import { Drug } from "../types/drug";
import { selectImage } from "../utils/home";
interface DayDrugsCardProps {
  header: string;
  drugsToTake?: Drug[];
}
const DayDrugsCard: React.FC<DayDrugsCardProps> = ({ header, drugsToTake }) => {
  console.log(header);
  return (
    <Card>
      <CardHeader>{header}</CardHeader>
      <CardContent>
        {drugsToTake?.map((drug, id) => {
          const drugGroup = selectImage(drug.drug_group);
          return (
            <Card key={id + drug.drug_name}>
              <CardHeader title={drug.drug_name} subheader={drugGroup} />
              <CardMedia
                component="img"
                height="194"
                image={require(`../assets/svg/${drugGroup}.svg`)}
                alt="drug category"
              ></CardMedia>
              <CardContent>
                <p>How many tablets to taake: {drug.amount}</p>
                <p>Additional info: {drug.additionalInfo}</p>
              </CardContent>
            </Card>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default DayDrugsCard;
