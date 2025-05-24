// src/services/stockService.js
const getStockPrice = async (symbol) => {
  try {
    const response = await fetch(`http://20.244.56.144/evaluation-service/auth${symbol}`);
    if (!response.ok) {
      // Handle HTTP errors
      throw new Error(`Error fetching data: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    // Assuming the API returns an object with currentPrice
    return { price: data.currentPrice };
  } catch (error) {
    console.error('Error fetching stock price:', error);
    // Optionally, you can return an error object or throw
    return { price: null, error: error.message };
  }
};

export default { getStockPrice };