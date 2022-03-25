import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Box,
  Alert,
  AlertTitle,
} from "@mui/material";
import useFetch from "../useFetch";
import TankContainer from "../Charts/TankContainer";

const TankDetails = () => {
  const obj = useFetch();
  return (
    <div>
      {obj["Tank Status"] === "Low" ? (
        <Alert variant="filled" severity="error">
          <AlertTitle>Alert</AlertTitle>The Level of water in your water tank is
          Low. Kindly fill your tank.
        </Alert>
      ) : (
        <></>
      )}

      {obj["Tank Status"] === "Normal" ? (
        <Alert variant="filled" severity="info">
          <AlertTitle>Normal</AlertTitle>The Level of water in your water tank
          is Normal. You should fill it soon.
        </Alert>
      ) : (
        <></>
      )}

      {obj["Tank Status"] === "High" ? (
        <Alert variant="filled" severity="success">
          <AlertTitle>High</AlertTitle>The Level of water in your water tank is
          High. No need to fill it.
        </Alert>
      ) : (
        <></>
      )}
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
            <TankContainer obj={obj} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent sx={{ margin: "15%" }}>
                <Typography variant="h6" sx={{ color: "black" }}>
                  Total Volume:&nbsp; {obj && obj["Tank Capacity"]} ml
                </Typography>
                <Typography variant="h6" sx={{ color: "black" }}>
                  Current Volume:&nbsp; {obj && obj["Current Capacity"]} ml
                </Typography>
                <Typography variant="h6" sx={{ color: "black" }}>
                  Tank Percentage:&nbsp; {obj && obj["Water Percentage"]}%
                </Typography>
                <Typography variant="h6" sx={{ color: "black" }}>
                  Tank State:&nbsp; {obj && obj["Tank Status"]}
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
