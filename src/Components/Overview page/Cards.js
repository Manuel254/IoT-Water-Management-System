import { Grid } from "@mui/material";
import SingleCard from "./SingleCard";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TodayIcon from "@mui/icons-material/Today";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import NotificationsIcon from "@mui/icons-material/Notifications";
import useFetch from "../useFetch";

const Cards = () => {
  // const chartData = useFetch();
  // const dailyCapacity = [];
  // let sum = 0;
  // for (let i = 0; i <= dailyCapacity.length; i++) {
  //   sum += chartData["Current Capacity"];
  //   dailyCapacity.push(sum);
  // }
  return (
    <>
      <Grid item xs={12} md={6}>
        <SingleCard
          mainIcon={
            <HourglassBottomIcon style={{ fontSize: 50 }} color="primary" />
          }
          smallIcon={
            <AccessTimeIcon fontSize="small" style={{ marginRight: "5px" }} />
          }
          period="Last Hour"
          quantity="0L"
          time="11:59am"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <SingleCard
          mainIcon={<TodayIcon style={{ fontSize: 50 }} color="warning" />}
          smallIcon={
            <NotificationsIcon
              fontSize="small"
              style={{ marginRight: "5px" }}
            />
          }
          period="Today"
          quantity="100,000L"
          time="19/01/2022"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <SingleCard
          mainIcon={
            <CalendarTodayIcon style={{ fontSize: 50 }} color="error" />
          }
          smallIcon={
            <TodayIcon fontSize="small" style={{ marginRight: "5px" }} />
          }
          period="Weekly"
          quantity="5,277,678L"
          time="Week 5"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <SingleCard
          mainIcon={
            <CalendarViewMonthIcon style={{ fontSize: 50 }} color="success" />
          }
          smallIcon={
            <TodayIcon fontSize="small" style={{ marginRight: "5px" }} />
          }
          period="Monthly"
          quantity="68,999,456L"
          time="January"
        />
      </Grid>
    </>
  );
};

export default Cards;
