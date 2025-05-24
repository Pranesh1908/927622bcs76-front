import React, { useState } from 'react';
import stockService from '../services/stockService';

const StockPrice = () => {
  const [symbol, setSymbol] = useState('');
  const [price, setPrice] = useState(null);
  const [error, setError] = useState('');

  const handleFetchPrice = async () => {
    const result = await stockService.getStockPrice(symbol);
    if (result.error) {
      setError(result.error);
      setPrice(null);
    } else {
      setPrice(result.price);
      setError('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter stock symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <button onClick={handleFetchPrice} style={{ padding: '8px 12px' }}>
        Get Price
      </button>
      {price && <h3>Current Price: ${price}</h3>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default StockPrice;
