// src/App.js

// Import React and necessary components from react-router-dom
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import custom pages
import HomePage from './pages/HomePage';
import ExpensePage from './pages/ExpensePage';
import BudgetPage from './pages/BudgetPage';
import GoalPage from './pages/GoalPage';
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';

// Import NavBar component
import NavBar from './components/NavBar'; 

// Main App component
function App() {
  return (
    <>
      {/* NavBar will be displayed on all pages */}
      <NavBar /> 
      
      {/* Main content area for different routes */}
      <div className="main-content">
        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/expenses" element={<ExpensePage />} />
          <Route path="/budgets" element={<BudgetPage />} />
          <Route path="/goals" element={<GoalPage />} />
        </Routes>
      </div>
    </>
  );
}

// Export the App component as the default export
export default App;
