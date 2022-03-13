import { useState, useEffect } from "react";
import { db, ref, onValue } from "../firebase-config";

const useFetch = () => {
  const [chartData, setChartData] = useState({});
  const [data, setData] = useState(0);
  const time = new Date().toLocaleTimeString();
  const date = new Date();
  const now = `${date.getFullYear()}-0${
    date.getMonth() + 1
  }-${date.getDate()}T${time.split(" ")[0]}`;

  useEffect(() => {
    const dataRef = ref(db, "data");
    onValue(dataRef, (snapshot) => {
      setChartData({ ...snapshot.val(), time, now });
      console.log("Component Rendered");
      console.log(snapshot.val());
      localStorage.setItem("Value", JSON.stringify(data));
      setData(
        (prevState) =>
          JSON.parse(prevState) + snapshot.val()["Current Capacity"]
      );
    });
  }, [time, now]);

  return chartData;
};

export default useFetch;
