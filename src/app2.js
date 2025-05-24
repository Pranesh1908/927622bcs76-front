// App.jsx
import React, { useState, useEffect } from 'react';
import HttpCalculator from './HttpCalculator';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data (mocked)
    setUser({ name: 'Praneshkumar S.S', age: 28, email: 'praneshsaravanan1908.com' });
  }, []);

  if (!user) return null;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

function DataDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch or generate data
    setData([10, 20, 30, 40, 50]);
  }, []);

  const average = data.reduce((sum, num) => sum + num, 0) / data.length || 0;

  return (
    <div>
      <h2>Data Visualization</h2>
      <ul>
        {data.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <p>Average: {average}</p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Merged Projects Dashboard</h1>
      <UserProfile />
      <DataDashboard />
      {/* Insert the separated HTTP Calculator component */}
      <HttpCalculator />
    </div>
  );
}

export default App;