import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint, index) => (
        <ChartBar value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} key={index} />
      ))}
    </div>
  );
};

export default Chart;
