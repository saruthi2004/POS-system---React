// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = ({ startSelling }) => {
  return (
    <div>
      <h1>POS System</h1>
      <p>Welcome to our clothing center. Start selling products now!</p>
      <button onClick={startSelling}>Start Selling Products</button>
    </div>
  );
};

export default Home;
