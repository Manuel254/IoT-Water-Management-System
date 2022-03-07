import React from "react";
import { Card, CardContent } from "@mui/material";
import MainCardContent from "./MainCardContent";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import BackpackIcon from "@mui/icons-material/Backpack";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TodayIcon from "@mui/icons-material/Today";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import useFetch from "../useFetch";

const MainCard = () => {
  const chartData = useFetch();
  return (
    <>
      <Card
        sx={{ width: "45vw", "@media(max-width: 500px)": { width: "100vw" } }}
      >
        <CardContent>
          <MainCardContent
            name="System Name"
            value="IOT Water Management System"
            icon={<LocalOfferIcon />}
          />
          <MainCardContent
            name="No of Tanks"
            value="8"
            icon={<BackpackIcon />}
          />
          <MainCardContent
            name="Avg Daily Consumption"
            value="0L"
            icon={<TodayIcon />}
          />
          <MainCardContent
            name="Avg Weekly Consumption"
            value="0L"
            icon={<CalendarTodayIcon />}
          />
          <MainCardContent
            name="Avg Monthly Consumption"
            value="0L"
            icon={<CalendarViewMonthIcon />}
          />
          <MainCardContent
            name="Consumption State"
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
