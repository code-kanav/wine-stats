import React from 'react';

interface Props {
  data: { [key: string]: { Mean: number; Median: number; Mode: number | number[] } };
  measure: string;
}

const StatisticsTable: React.FC<Props> = ({ data, measure }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Measure</th>
          {Object.keys(data).map((className) => (
            <th key={className}>Class {className}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> Mean</td>
          {Object.values(data).map((values, index) => (
            <td key={index}>{values.Mean.toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td> Median</td>
          {Object.values(data).map((values, index) => (
            <td key={index}>{values.Median.toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td> Mode</td>
          {Object.values(data).map((values, index) => (
            <td key={index}>
              {Array.isArray(values.Mode) ? values.Mode.map((mode) => mode.toFixed(3)).join(', ') : values.Mode.toFixed(3)}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default StatisticsTable;
