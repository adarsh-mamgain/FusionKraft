import { useState } from "react";

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [compoundingFrequency, setCompoundingFrequency] = useState("1");
  const [result, setResult] = useState(null);

  const calculateInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100; // Convert rate to decimal
    const t = parseFloat(time);
    const n = parseFloat(compoundingFrequency);

    const amount = p * Math.pow(1 + r / n, n * t);
    const interest = amount - p;
    setResult(interest.toFixed(2)); // Display result with 2 decimal places
  };

  return (
    <div className="container m-4 p-4 md:p-20 border rounded-xl max-w-lg">
      <h1 className="text-3xl font-semibold mb-4">Compound Interest Calculator</h1>
      <form className="space-y-4 max-w-md">
        <div className="flex flex-col mb-4">
          <label htmlFor="principal">
            Principal Amount:
          </label>
          <input
            type="number"
            id="principal"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="bg-gray-800 border rounded py-2 px-3"
            placeholder="Enter principal amount"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="rate">
            Annual Interest Rate (%):
          </label>
          <input
            type="number"
            id="rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="bg-gray-800 border rounded py-2 px-3"
            placeholder="Enter annual interest rate"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="time">
            Time Period (years):
          </label>
          <input
            type="number"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="bg-gray-800 border rounded py-2 px-3"
            placeholder="Enter time in years"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="compoundingFrequency">
            Compounding Frequency:
          </label>
          <select
            id="compoundingFrequency"
            value={compoundingFrequency}
            onChange={(e) => setCompoundingFrequency(e.target.value)}
            className="bg-gray-800 border rounded py-2 px-3"
          >
            <option value="1">Annually</option>
            <option value="2">Semi-annually</option>
            <option value="4">Quarterly</option>
            <option value="12">Monthly</option>
          </select>
        </div>
        <button
          type="button"
          onClick={calculateInterest}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Calculate
        </button>
      </form>
      {result !== null && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Compound Interest:</h2>
          <p className="text-xl">${result}</p>
        </div>
      )}
    </div>
  );
};

export default CompoundInterestCalculator;
