import React from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import tank from "../../Assets/images/tank.png";

const TankDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <Container>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h5" component="h3" align="center">
            Tank {id}
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
            <img src={tank} alt="tank" width={500} height={500} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ color: "black" }}>
                  Tank ID:&nbsp; {id}
                </Typography>
                <Typography variant="h6" sx={{ color: "black" }}>
                  Total Volume:&nbsp; 0L
                </Typography>
                <Typography variant="h6" sx={{ color: "black" }}>
                  Current Volume:&nbsp; 0L
                </Typography>
                <Typography variant="h6" sx={{ color: "black" }}>
                  Tank Percentage:&nbsp; 60%
                </Typography>
                <Typography variant="h6" sx={{ color: "black" }}>
                  Tank State:&nbsp; Normal
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TankDetails;
