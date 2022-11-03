import { ChartBar } from './CharBar';
import './Chart.css';

export const Chart = props => {

  const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const maxDataPointValue = Math.max(...dataPointsValues);

  return (
    <div className='chart'>
      {props.dataPoints.map(dataPoint => {
         return <ChartBar 
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxDataPointValue}
          label={dataPoint.label}
        />
      })}
    </div>
    );
}