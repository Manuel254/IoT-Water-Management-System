import React from "react";
import { Card, CardContent } from "@mui/material";
import MainCardContent from "./MainCardContent";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import BackpackIcon from "@mui/icons-material/Backpack";
import TodayIcon from "@mui/icons-material/Today";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import useFetch from "../useFetch";

const MainCard = ({ data }) => {
  const chartData = useFetch();
  const dat = [600, 500, 500, 200];
  const consumptionArr = [];

  for (let i = 0; i < data.length - 1; i++) {
    const diff = data[i] - data[i + 1];
    consumptionArr.push(diff);
    data[i] = data[i + 1];
  }

  const consumption = consumptionArr
    .filter((el) => !isNaN(el))
    .reduce((total, current) => total + current, 0);

  const avg = Math.floor(consumption / consumptionArr.length);

  console.log(consumptionArr);
  console.log(data);
  console.log(consumption);
  return (
    <>
      <Card>
        <CardContent>
          <MainCardContent
            name="System Name"
            value="IOT Water Management System"
            icon={<LocalOfferIcon />}
          />
          <MainCardContent
            name="No of Tanks"
            value="1"
            icon={<BackpackIcon />}
          />
          <MainCardContent
            name="Avg water Consumption"
            value={`${avg} ml`}
            icon={<TodayIcon />}
          />
          <MainCardContent
            name="Tank State"
            value={chartData["Tank Status"]}
            icon={<FilterAltIcon />}
          />
          <MainCardContent
            name="Last Update"
            value={chartData["time"]}
            icon={<LocationOnIcon />}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default MainCard;
