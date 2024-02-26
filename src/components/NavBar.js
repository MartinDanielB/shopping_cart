import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/features">Features</Link>
      <Link to="/pricing">Pricing</Link>
      {/* Add more links as needed */}
    </nav>
  );
};

export default NavigationBar;
