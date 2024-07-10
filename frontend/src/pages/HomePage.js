// src/pages/HomePage.js
// Importing necessary libraries and components
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

// Functional component for the Home Page
function HomePage() {
  // Render the home page
  return (
    <div className="homepage">
      <h1>Welcome to Budget Tracker</h1>
      <p>Manage your expenses, budgets, and goals efficiently.</p>
      
      {/* Section to display summary stats */}
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
      
      {/* Quick links to navigate to other pages */}
      <div className="quick-links">
        <Link to="/expenses">View Expenses</Link>
        <Link to="/budgets">View Budgets</Link>
        <Link to="/goals">View Goals</Link>
      </div>
      
      {/* Call-to-action buttons */}
      <div className="cta">
        <Link to="/expenses" className="cta-button">Add New Expense</Link>
        <Link to="/budgets" className="cta-button">Create New Budget</Link>
        <Link to="/goals" className="cta-button">Set a New Goal</Link>
      </div>
    </div>
  );
}

// Exporting the HomePage component as the default export
export default HomePage;
