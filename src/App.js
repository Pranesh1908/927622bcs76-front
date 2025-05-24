import React, { useState } from 'react';

function App() {
  const [stockSymbol, setStockSymbol] = useState('');
  const [stockPrices, setStockPrices] = useState([]);
  const [averagePrice, setAveragePrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchStockData = async () => {
    setLoading(true);
    setError('');
    // Simulated API call to fetch stock prices
    try {
      // Example API URL: replace with actual endpoint if available
      const response = await fetch(`https://your-api-endpoint/stocks/${stockSymbol}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data.prices.length === 0) {
        setError('No data found for this symbol.');
        setStockPrices([]);
        setAveragePrice(0);
      } else {
        setStockPrices(data.prices);
        const avg = data.prices.reduce((a, b) => a + b, 0) / data.prices.length;
        setAveragePrice(avg.toFixed(2));
      }
    } catch (err) {
      setError('Failed to fetch stock data.');
    }
    setLoading(false);
  };

  // Functions to call various microservice APIs
  const callPrimeNumbersAPI = async () => {
    const response = await fetch('https://20.244.56.144/evaluation-service/primes');
    const data = await response.json();
    alert(`Prime Numbers: ${data.numbers.join(', ')}`);
  };

  const callFibonacciAPI = async () => {
    const response = await fetch('https://20.244.56.144/evaluation-service/fibo');
    const data = await response.json();
    alert(`Fibonacci Numbers: ${data.numbers.join(', ')}`);
  };

  const callEvenNumbersAPI = async () => {
    const response = await fetch('https://20.244.56.144/evaluation-service/even');
    const data = await response.json();
    alert(`Even Numbers: ${data.numbers.join(', ')}`);
  };

  const callOddNumbersAPI = async () => {
    const response = await fetch('https://20.244.56.144/evaluation-service/odd');
    const data = await response.json();
    alert(`Odd Numbers: ${data.numbers.join(', ')}`);
  };

  const callRandomNumbersAPI = async () => {
    const response = await fetch('https://20.244.56.144/evaluation-service/rand');
    const data = await response.json();
    alert(`Random Numbers: ${data.numbers.join(', ')}`);
  };

  return (
    <div style={{
      maxWidth: '800px', margin: '5a0px auto', padding: '20px',
      border: '1px solid #ccc', borderRadius: '8px', fontFamily: 'Arial'
    }}>
      <h1>Stock Price Aggregation & HTTP Calculator
      
      </h1>

      {/* Stock Price Section */}
      <div style={{ marginBottom: '30px' }}>
        <h2>Stock Price Aggregation Frontend</h2>
        <input
          type="text"
          placeholder="Enter Stock Symbol"
          value={stockSymbol}
          onChange={(e) => setStockSymbol(e.target.value)}
          style={{ padding: '8px', width: '200px', marginRight: '10px' }}
        />
        <button onClick={fetchStockData} style={{ padding: '8px' }}>Fetch Prices</button>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {stockPrices.length > 0 && (
          <div>
            <h3>Prices for {stockSymbol}:</h3>
            <ul>
              {stockPrices.map((price, idx) => (
                <li key={idx}>${price}</li>
              ))}
            </ul>
            <h4>Average Price: ${averagePrice}</h4>
          </div>
        )}
      </div>

      {/* Microservices API Buttons */}
      <div>
        <h2>Test Server APIs</h2>
        <button onClick={callPrimeNumbersAPI} style={{ marginRight: '10px', padding: '8px' }}>Prime Numbers API</button>
        <button onClick={callFibonacciAPI} style={{ marginRight: '10px', padding: '8px' }}>Fibonacci Numbers API</button>
        <button onClick={callEvenNumbersAPI} style={{ marginRight: '10px', padding: '8px' }}>Even Numbers API</button>
        <button onClick={callOddNumbersAPI} style={{ marginRight: '10px', padding: '8px' }}>Odd Numbers API</button>
        <button onClick={callRandomNumbersAPI} style={{ padding: '8px' }}>Random Numbers API</button>
      </div>
    </div>
  );
}

export default App;