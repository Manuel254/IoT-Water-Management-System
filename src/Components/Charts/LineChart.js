import { useState, useEffect, useRef, useMemo } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import { db, ref, onValue } from "../../firebase-config";

ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

const LineChart = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });
  const [chartData, setChartData] = useState({});
  // const date = new Date();
  // const dateToday = `${date.getFullYear()}-0${
  //   date.getMonth() + 1
  // }-${date.getDate()}`;

  // const { dat } = useContext(consumptionContext);

  // console.log(typeof dat);

  let dataArr = [];
  useEffect(() => {
    onValue(ref(db, "graph"), (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        let xVal = snapshot.val()[childSnapshot.key].timestamp;
        let yVal = snapshot.val()[childSnapshot.key].level;
        dataArr.push({ x: xVal, y: yVal });
      });
      setChartData(dataArr);
    });
  }, []);

  const myChartRef = useRef();

  const config = useMemo(
    () => ({
      datasets: [
        {
          label: "Water Level",
          barThickness: 7,
          maxBarThickness: 10,
          minBarLength: 5,
          data: chartData,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    }),
    [chartData]
  );

  useEffect(() => {
    setData(config);
  }, [config]);

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Daily Water Consumption",
        fontSize: 25,
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "minute",
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <Chart type="bar" data={data} options={options} ref={myChartRef} />
    </>
  );
};

export default LineChart;
