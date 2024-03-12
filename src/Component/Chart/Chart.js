import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map( dataPoint => dataPoint.value);
    const totalmaximum = Math.max(...dataPointsValues)
    // console.log(totalmaximum)
    // console.log(dataPointsValues)

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalmaximum}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
