import React from 'react';
// Import routing components from react-router-dom
import { Switch, Route, BrowserRouter } from 'react-router-dom';
// Import StylesProvider from Material-UI
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

// Import the page components
import Landing from './components/Landing';
import Pricing from './components/Pricing';

// Create the class name generator with a production prefix
const generateClassName = createGenerateClassName({
  productionPrefix: 'ma', // Prefix for Marketing App
});
// Define the main App component
export default () => {
  return (
    <div>
      {/* Wrap routes with StylesProvider and pass the generator */}
      <StylesProvider generateClassName={generateClassName}>
        {/* BrowserRouter: Provides routing capabilities */}
        <BrowserRouter>
          {/* Switch: Renders the first Route that matches the current URL */}
          <Switch>
            {/* Route for the pricing page */}
            <Route exact path="/pricing" component={Pricing} />
            {/* Route for the landing page (root path) - must come last */}
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
