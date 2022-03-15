import { useState, useEffect } from "react";
import { db, ref, onValue, push } from "../firebase-config";

const useFetch = (props) => {
  const [chartData, setChartData] = useState({});
  const time = new Date().toLocaleTimeString("en-US", { hour12: false });
  const date = new Date();
  const now = `${date.getFullYear()}-0${
    date.getMonth() + 1
  }-${date.getDate()}T${time.split(" ")[0]}`;
  const formatDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  console.log(time);
  useEffect(() => {
    let capacity = 0;
    onValue(ref(db, "data"), (snapshot) => {
      capacity = snapshot.val()["Current Capacity"];
      setChartData({ ...snapshot.val(), time, now });
    });

    push(ref(db, "graph"), {
      date: formatDate,
      level: capacity,
      timestamp: now,
    });
    console.log("render");
  }, [time, now, formatDate]);

  return chartData;
};

export default useFetch;
