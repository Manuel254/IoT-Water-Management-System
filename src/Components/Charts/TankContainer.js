import { useContext } from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import Widgets from "fusioncharts/fusioncharts.widgets";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";
import useFetch from "../useFetch";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme, Widgets);

function TankContainer({ obj }) {
  const dataSource = {
    chart: {
      lowerLimit: "0",
      upperLimit: "1327",
      lowerLimitDisplay: "Empty",
      upperLimitDisplay: "Full",
      numberSuffix: " ml",
      cylFillColor: "#0099fd",
      cyloriginx: "220",
      cyloriginy: "300",
      cylradius: "80",
      cylheight: "200",
    },
    value: obj["Current Capacity"],
  };

  const chartConfigs = {
    type: "cylinder",
    width: 450,
    height: 400,
    dataFormat: "json",
    dataSource: dataSource,
  };

  return (
    <div className="App">
      <ReactFC {...chartConfigs} />
      {/* {alert("Water Level is Low")
        ? obj["Tank Status"] === "Low"
        : alert("Water Level is Normal")} */}
    </div>
  );
}

export default TankContainer;
