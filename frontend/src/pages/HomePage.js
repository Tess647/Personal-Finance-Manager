// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
//import '../styles/Page.css';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <h1>Welcome to Budget Tracker</h1>
      <p>Manage your expenses, budgets, and goals efficiently.</p>
      <div className="stats">
        <div className="stat">
          <h2>Total Expenses</h2>
          <p>$0</p>
        </div>
        <div className="stat">
          <h2>Total Budgets</h2>
          <p>$0</p>
        </div>
        <div className="stat">
          <h2>Total Goals</h2>
          <p>0</p>
        </div>
      </div>
      <div className="quick-links">
        <Link to="/expenses">View Expenses</Link>
        <Link to="/budgets">View Budgets</Link>
        <Link to="/goals">View Goals</Link>
      </div>
      <div className="cta">
        <Link to="/expenses" className="cta-button">Add New Expense</Link>
        <Link to="/budgets" className="cta-button">Create New Budget</Link>
        <Link to="/goals" className="cta-button">Set a New Goal</Link>
      </div>
    </div>
  );
}

export default HomePage;
