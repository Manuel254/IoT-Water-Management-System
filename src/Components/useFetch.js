import { useState, useEffect } from "react";
import { db, ref, onValue } from "../firebase-config";

const useFetch = () => {
  const [chartData, setChartData] = useState({});
  const time = new Date().toLocaleTimeString("en-ke", { hour12: false });
  const date = new Date();
  const now = `${date.getFullYear()}-0${
    date.getMonth() + 1
  }-${date.getDate()}T${time.split(" ")[0]}`;

  console.log(now);

  useEffect(() => {
    const dataRef = ref(db, "data");
    onValue(dataRef, (snapshot) => {
      setChartData({ ...snapshot.val(), time, now });
      console.log("Component Rendered");
    });
  }, [time, now]);

  return chartData;
};

export default useFetch;
