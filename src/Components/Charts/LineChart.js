import { useState, useEffect, useRef, useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  TimeScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import useFetch from "../useFetch";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  TimeScale,
  Tooltip,
  Legend
);

const LineChart = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });
  const chartData = useFetch();
  const myChartRef = useRef();
  const yLabels = [];

  function addData(chart, data) {
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    chart.update();
  }

  const config = useMemo(
    () => ({
      datasets: [
        {
          label: "Water Level",
          data: yLabels,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    }),
    []
  );

  console.log(chartData["now"]);

  useEffect(() => {
    addData(myChartRef.current, {
      x: chartData["now"],
      y: chartData["Current Capacity"],
    });
    setData(config);
  }, [config, chartData]);

  console.log(chartData["now"]);
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
          unit: "second",
          displayFormats: {
            second: "h:mm:ss a",
          },
        },
        ticks: {
          maxTicksLimits: 6,
        },
      },
    },
  };

  return (
    <>
      <Chart type="line" data={data} options={options} ref={myChartRef} />
    </>
  );
};

export default LineChart;
