import React from 'react';
// Import BrowserRouter
import { BrowserRouter } from 'react-router-dom';
// Import the new Header component
import Header from './components/Header';
// Import the MarketingApp component (already there)
import MarketingApp from './components/MarketingApp';

export default () => {
  return (
    // Wrap everything in BrowserRouter
    <BrowserRouter>
      <div>
        {/* Render the Header */}
        <Header />
        {/* Render the MarketingApp */}
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};
