import wineData from "./data.json";
import { calculateMean, calculateMedian,calculateMode, calculateGamma, convertToNumber } from './utilis/statisticsUtils';
import StatisticsTable from './components/StatisticsTable';



const App: React.FC = () => {
  const flavanoidsData = {
    '1': {
      Mean: calculateMean(wineData.filter((item) => item.Alcohol === 1).map((item) => convertToNumber(item.Flavanoids))),
      Median: calculateMedian(wineData.filter((item) => item.Alcohol === 1).map((item) => convertToNumber(item.Flavanoids))),
      Mode: calculateMode(wineData.filter((item) => item.Alcohol === 1).map((item) => convertToNumber(item.Flavanoids))),
    },
    '2': {
      Mean: calculateMean(wineData.filter((item) => item.Alcohol === 2).map((item) => convertToNumber(item.Flavanoids))),
      Median: calculateMedian(wineData.filter((item) => item.Alcohol === 2).map((item) => convertToNumber(item.Flavanoids))),
      Mode: calculateMode(wineData.filter((item) => item.Alcohol === 2).map((item) => convertToNumber(item.Flavanoids))),
    },
    '3': {
      Mean: calculateMean(wineData.filter((item) => item.Alcohol === 2).map((item) => convertToNumber(item.Flavanoids))),
      Median: calculateMedian(wineData.filter((item) => item.Alcohol === 2).map((item) => convertToNumber(item.Flavanoids))),
      Mode: calculateMode(wineData.filter((item) => item.Alcohol === 2).map((item) => convertToNumber(item.Flavanoids))),
    },
  };
  
  const gammaData = {
    '1': {
      Mean: calculateMean(calculateGamma(wineData.filter((item) => item.Alcohol === 1))),
      Median: calculateMedian(calculateGamma(wineData.filter((item) => item.Alcohol === 1))),
      Mode: calculateMode(calculateGamma(wineData.filter((item) => item.Alcohol === 1))),
    },
    '2': {
      Mean: calculateMean(calculateGamma(wineData.filter((item) => item.Alcohol === 2))),
      Median: calculateMedian(calculateGamma(wineData.filter((item) => item.Alcohol === 2))),
      Mode: calculateMode(calculateGamma(wineData.filter((item) => item.Alcohol === 2))),
    },
    '3': {
      Mean: calculateMean(calculateGamma(wineData.filter((item) => item.Alcohol === 3))),
      Median: calculateMedian(calculateGamma(wineData.filter((item) => item.Alcohol === 3))),
      Mode: calculateMode(calculateGamma(wineData.filter((item) => item.Alcohol === 3))),
    },
   
  };
  return (
    <div>
      <h1>Flavanoids Statistics</h1>
      <StatisticsTable data={flavanoidsData} measure="Flavanoids" />

      <h1>Gamma Statistics</h1>
      <StatisticsTable data={gammaData} measure="Gamma" />
    </div>
  );
};

export default App;
