import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import ResultsTable from "./components/ResultsTable.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = (inputIdentifier, newValue) => {
    if (inputIdentifier === "initialInvestment") {
      return newValue > 0;
    }
    if (inputIdentifier === "annualInvestment") {
      return newValue > 0;
    }
    if (inputIdentifier === "expectedReturn") {
      return newValue > 0;
    }
    if (inputIdentifier === "duration") {
      return newValue > 0;
    }
  };

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevState) => ({
      ...prevState,
      [inputIdentifier]: +newValue,
    }));
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {inputIsValid("initialInvestment", userInput.initialInvestment) &&
      inputIsValid("annualInvestment", userInput.annualInvestment) &&
      inputIsValid("expectedReturn", userInput.expectedReturn) &&
      inputIsValid("duration", userInput.duration) ? (
        <ResultsTable userInput={userInput} />
      ) : (
        <p className="center">Please enter valid values for all inputs</p>
      )}
    </>
  );
}

export default App;
