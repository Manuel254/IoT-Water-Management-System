import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const [data, setData] = useState({ datasets: [] });

  const chartFunc = () =>
    setData({
      labels: ["Nairobi	City", "Mombasa City", "Kisumu", "Nakuru", "Ruiru"],
      datasets: [
        {
          label: "Population",
          data: [4394073, 1208333, 721082, 570674, 490120],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    });

  useEffect(() => {
    chartFunc();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Top 5 Largest Cities in Kenya",
        fontSize: 25,
      },
    },
  };

  return (
    <>
      <Chart type="line" data={data} options={options} />
    </>
  );
};

export default LineChart;
