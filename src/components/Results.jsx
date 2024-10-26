import {calculateInvestmentResults, formatter} from '../util/investment';

const Results = ({investmentData}) => {
  const {initial, annual, expected, duration} = investmentData;

  const annualData = calculateInvestmentResults({initial, annual, expected, duration}); 
  const initialinvestment = annualData[0].valueEndOfYear - annualData[0].interest - annualData[0].annual; 

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((data) => {
          const totalInterest = data.valueEndOfYear - (data.annual * data.year) - initialinvestment;
          const totalInvested = data.valueEndOfYear - totalInterest;

          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
