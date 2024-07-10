// src/index.js

// Import React library
import React from 'react';
// Import ReactDOM for rendering the app
import ReactDOM from 'react-dom/client';
// Import Provider from react-redux to integrate Redux with React
import { Provider } from 'react-redux';
// Import BrowserRouter from react-router-dom for routing
import { BrowserRouter as Router } from 'react-router-dom';
// Import the main App component
import App from './App';
// Import the Redux store
import store from './store';
// Import the main CSS file
import './styles/main.css';

// Create a root for React DOM rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  // Wrap the app with Provider to make the Redux store available to all components
  <Provider store={store}>
    {/* Wrap the app with Router to enable routing */}
    <Router>
      <App />
    </Router>
  </Provider>
);
