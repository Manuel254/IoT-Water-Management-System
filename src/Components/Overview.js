import { Grid } from "@mui/material";

import CardItems from "./Cards.js";

const Overview = () => {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid container xs={12} md={6} spacing={5}>
          <CardItems />
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </div>
  );
};

export default Overview;
