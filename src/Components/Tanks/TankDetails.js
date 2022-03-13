import React from "react";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import useFetch from "../useFetch";
import TankContainer from "../Charts/TankContainer";

const TankDetails = () => {
  const obj = useFetch();
  return (
    <div>
      <Container>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h5" component="h3" align="center">
            Tank Status
          </Typography>
          <Typography
            variant="caption"
            component="p"
            sx={{ color: "#9e9e9e" }}
            align="center"
          >
            (Tank stats)
          </Typography>
        </Box>

        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <TankContainer />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent sx={{ margin: "15%" }}>
                <Typography variant="h6" sx={{ color: "black" }}>
                  Total Volume:&nbsp; {obj["Tank Capacity"]} ml
                </Typography>
                <Typography variant="h6" sx={{ color: "black" }}>
                  Current Volume:&nbsp; {obj["Current Capacity"]} ml
                </Typography>
                <Typography variant="h6" sx={{ color: "black" }}>
                  Tank Percentage:&nbsp; {obj["Water Percentage"]}%
                </Typography>
                <Typography variant="h6" sx={{ color: "black" }}>
                  Tank State:&nbsp; {obj["Tank Status"]}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {console.log(obj)}
    </div>
  );
};

export default TankDetails;
