import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import store from './store';
import './styles/main.css'; // Import CSS

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <Provider store={store}>
    <Router>
      <App />
   </Router>
  </Provider>
);
