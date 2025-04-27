import React from 'react';
// Import BrowserRouter
import { BrowserRouter } from 'react-router-dom';
// Import the new Header component
import Header from './components/Header';
// Import StylesProvider AND createGenerateClassName
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Header from './components/Header';
// Import the MarketingApp component (already there)
import MarketingApp from './components/MarketingApp';

// Create the class name generator with a production prefix
const generateClassName = createGenerateClassName({
  productionPrefix: 'co', // Prefix for Container App
});

export default () => {
  return (
    // Wrap everything in BrowserRouter
    <BrowserRouter>
    {/* Wrap content with StylesProvider and pass the generator */}
    <StylesProvider generateClassName={generateClassName}>
      <div>
        {/* Render the Header */}
        <Header />
        {/* Render the MarketingApp */}
        <MarketingApp />
      </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
