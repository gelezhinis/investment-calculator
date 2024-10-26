import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [investment, setInvestment] = useState({
    initial: 1000,
    annual: 100,
    expected: 6,
    duration: 9,
  });

  const inputIsValid =
    investment.duration >= 1 &&
    investment.initial >= 1 &&
    investment.annual >= 1 &&
    investment.expected >= 1;

  const handleInvestment = (inputIdentifier, inputAmount) => {
    setInvestment((prevState) => ({
      ...prevState,
      [inputIdentifier]: +inputAmount,
    }));
  };

  return (
    <>
      <Header />
      <UserInput
        onHandleInvestment={handleInvestment}
        investment={investment}
      />
      {inputIsValid ? (
        <Results investmentData={investment} />
      ) : (
        <p className="center">Some of the inputs are not valid (negative or zero)!</p>
      )}
    </>
  );
}

export default App;
