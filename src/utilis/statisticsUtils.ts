export const convertToNumber = (value: string | number): number => {
    return typeof value === 'string' ? parseFloat(value) : value;
  };
  
  export const calculateMean = (data: (string | number)[]) => {
    const numericData = data.map(convertToNumber);
    const sum = numericData.reduce((acc, val) => acc + val, 0);
    return sum / numericData.length;
  };

  export const calculateMedian = (data: (string | number)[]) => {
    const numericData = data.map(convertToNumber);
    const sortedData = numericData.slice().sort((a, b) => a - b);
    const mid = Math.floor(sortedData.length / 2);
    return sortedData.length % 2 === 0
      ? (sortedData[mid - 1] + sortedData[mid]) / 2
      : sortedData[mid];
  };
  
  export const calculateMode = (data: (string | number)[]) => {
    const numericData = data.map(convertToNumber);
    
    const frequencyMap: { [key: string]: number } = {};
    
    numericData.forEach((value) => {
      const key = String(value);
      frequencyMap[key] = (frequencyMap[key] || 0) + 1;
    });
  
    const maxFrequency = Math.max(...Object.values(frequencyMap));
    const modeValues = Object.keys(frequencyMap).filter((key) => frequencyMap[key] === maxFrequency);
  
    return modeValues.length > 1 ? modeValues.map(Number) : Number(modeValues[0]);
  };
  
  export const calculateGamma = (data: any[]) => {
    return data.map((item) => (convertToNumber(item.Ash) * convertToNumber(item.Hue)) / convertToNumber(item.Magnesium));
  };
  