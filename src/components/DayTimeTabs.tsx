import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { eveningDrugs, morningDrugs, noonDrugs } from "../utils/home";
import { Drug, SortedDrugs } from "../types/drug";
import DayDrugsCard from "./DayDrugsCard";

interface DayTimeTabsProps {
  drugs: any;
}

const DayTimeTabs: React.FC<DayTimeTabsProps> = ({ drugs }) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const dayTimesTabsInfo = [
    { label: "Morning", value: "1" },
    { label: "Noon", value: "2" },
    { label: "Evening", value: "3" },
  ];
  //   const dayTimesTabsPanelInfo = [
  //     { value: "1", header: "Morning", drugs: morningDrugs(drugs) },
  //     { value: "2", header: "Noon", drugs: noonDrugs(drugs) },
  //     { value: "3", header: "Evening", drugs: eveningDrugs(drugs) },
  //   ];
  const sortedDrugs = [
    { value: "1", drugs: morningDrugs(drugs) },
    { value: "2", drugs: noonDrugs(drugs) },
    { value: "3", drugs: eveningDrugs(drugs) },
  ];
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {/* <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" /> */}
            {dayTimesTabsInfo.map((el, id) => {
              return <Tab key={id} label={el.label} value={el.value} />;
            })}
          </TabList>
        </Box>
        {/* <TabPanel value="1">
          <DayDrugsCard drugsToTake={sortedDrugs[0].drugs}></DayDrugsCard>
        </TabPanel>
        <TabPanel value="2">
          <DayDrugsCard drugsToTake={sortedDrugs[1].drugs}></DayDrugsCard>
        </TabPanel>
        <TabPanel value="3">
          <DayDrugsCard drugsToTake={sortedDrugs[2].drugs}></DayDrugsCard>
        </TabPanel> */}
        {/* <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel> */}
        {sortedDrugs?.map(
          (
            el: { value: any; drugs: Drug[] | undefined },
            id: React.Key | null | undefined
          ) => {
            console.log(el.value);
            return (
              <TabPanel key={id} value={el.value}>
                <DayDrugsCard drugsToTake={el.drugs}></DayDrugsCard>
              </TabPanel>
            );
          }
        )}
      </TabContext>
    </Box>
  );
};
export default DayTimeTabs;
