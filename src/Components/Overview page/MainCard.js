import { useState, useEffect } from "react";
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
  const [consumption, setConsumption] = useState(0);
  const consumptionArr = [];

  useEffect(() => {
    for (let i = 0; i < data.length - 1; i++) {
      const diff = data[i] - data[i + 1];
      consumptionArr.push(diff);
      data[i] = data[i + 1];
    }
    setConsumption(
      Math.abs(
        consumptionArr
          .filter((el) => !isNaN(el))
          .reduce((total, current) => total + current, 0)
      )
    );
  }, [consumptionArr]);

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
            name="Water Consumption"
            value={`${consumption} ml`}
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
