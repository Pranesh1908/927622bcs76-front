// HttpCalculator.jsx
import React, { useState, useEffect } from 'react';

function HttpCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    // Fetch data from an API (mocked here)
    const fetchData = async () => {
      // Replace with your actual API endpoint
      // const response = await fetch('https://api.example.com/numbers');
      // const data = await response.json();

      // Mocked data
      const data = { numbers: [15, 25, 35, 45] };
      setNumbers(data.numbers);
    };

    fetchData();
  }, []);

  const calculateSum = () => {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    setResult(sum);
  };

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h3>HTTP Calculator</h3>
      <button onClick={calculateSum}>Calculate Sum</button>
      {result !== null && <p>Result: {result}</p>}
      <p>Numbers: {numbers.join(', ')}</p>
    </div>
  );
}

export default HttpCalculator;