// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExpensePage from './pages/ExpensePage';
import BudgetPage from './pages/BudgetPage';
import GoalPage from './pages/GoalPage';
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import NavBar from './components/NavBar'; // Import NavBar

function App() {
  return (
    <>
      <NavBar /> {/* NavBar will be displayed on all pages */}
      <div className="main-content">
        <Routes>
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

export default App;
