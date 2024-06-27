// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
      <h2>Personal Finance Manager</h2>
      <nav>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/expenses" element={<ExpensePage />} />
      <Route path="/budgets" element={<BudgetPage />} />
      <Route path="/goals" element={<GoalPage />} />
      </nav>
    </div>
  );
}

export default NavBar;
