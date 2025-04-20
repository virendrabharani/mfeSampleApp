import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // We will create App.js next

// Render the App component directly into the 'root' div in index.html
// No need for development checks or exporting mount like in micro-frontends
ReactDOM.render(<App />, document.querySelector('#root'));
