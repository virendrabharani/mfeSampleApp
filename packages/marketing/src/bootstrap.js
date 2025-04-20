import React from 'react';
import ReactDOM from 'react-dom';
// Import the new App component
import App from './App';

// 1. Define the mount function
const mount = (el) => {
  // Render the App component instead of the h1
  ReactDOM.render(<App />, el);
};

// 2. Check if we are running in development and in isolation
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// 3. Export the mount function
export { mount };

