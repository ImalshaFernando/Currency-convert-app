import React, { useState } from "react";

const App = () => {
  // Hardcoded exchange rates
  const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.75, INR: 74.5, LKR: 320 },
    EUR: { USD: 1.18, GBP: 0.88, INR: 87.5, LKR: 375 },
    GBP: { USD: 1.33, EUR: 1.14, INR: 99.8, LKR: 425 },
    INR: { USD: 0.013, EUR: 0.011, GBP: 0.010, LKR: 4.3 },
    LKR: { USD: 0.0031, EUR: 0.0027, GBP: 0.0024, INR: 0.23 },
  };

  // State for amount, from currency, to currency, and result
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Convert currency based on hardcoded rates
  const handleConvert = () => {
    const rate = exchangeRates[fromCurrency][toCurrency];
    setConvertedAmount(amount * rate);
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Simple Currency Converter</h1>
      <div>
        <label>
          Amount:{" "}
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          From:{" "}
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {Object.keys(exchangeRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          To:{" "}
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {Object.keys(exchangeRates[fromCurrency]).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button onClick={handleConvert} style={{ marginTop: "1rem" }}>
        Convert
      </button>
      {convertedAmount > 0 && (
        <h2>
          {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
        </h2>
      )}
    </div>
  );
};

export default App;
