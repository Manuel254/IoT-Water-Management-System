import { useState, useEffect } from "react";
import { Grid, Container } from "@mui/material";
import LineChart from "../Charts/LineChart";
import MainCard from "./MainCard";
import { db, ref, onValue } from "../../firebase-config";

const Overview = () => {
  const [data, setData] = useState(0);
  let dataArr = [];
  useEffect(() => {
    onValue(ref(db, "graph"), (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        let yVal = snapshot.val()[childSnapshot.key].level;
        dataArr.push(yVal);
      });
      setData(dataArr);
    });
  }, []);

  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <MainCard data={data} />
          </Grid>
        </Grid>
      </Container>

      <Container>
        <LineChart />
      </Container>
    </div>
  );
};

export default Overview;
