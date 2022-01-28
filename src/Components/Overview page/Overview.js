import { Grid, Container } from "@mui/material";
import LineChart from "../Charts/LineChart";
import Cards from "./Cards.js";
import MainCard from "./MainCard";

const Overview = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid container item xs={12} md={6} spacing={1}>
          <Cards />
        </Grid>
        <Grid item xs={12} md={6}>
          <MainCard />
        </Grid>
      </Grid>
      <Container>
        <LineChart />
      </Container>
    </div>
  );
};

export default Overview;
