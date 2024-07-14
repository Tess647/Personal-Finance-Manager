// src/pages/HomePage.js
// Importing necessary libraries and components
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/HomePage.css';

// Functional component for the Home Page
function HomePage() {
  // State to hold financial summary
  const [summary, setSummary] = useState({
    totalBalance: 0,
    monthlyExpenses: 0,
    goalsProgress: 0,
  });

  // Fetch data from backend when component mounts
  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await axios.get('/api/dashboard');
        setSummary(response.data);
      } catch (error) {
        console.error('Error fetching summary data', error);
      }
    };

    fetchSummary();
  }, []);

  // Render the home page
  return (
    <div className="homepage">
      <h1>Welcome to Budget Tracker</h1>
      <p>Manage your expenses, budgets, and goals efficiently.</p>
      
      {/* Section to display summary stats */}
      <div className="stats">
        <div className="stat">
          <h2>Total Balance</h2>
          <p>${summary.totalBalance}</p>
        </div>
        <div className="stat">
          <h2>Monthly Expenses</h2>
          <p>${summary.monthlyExpenses}</p>
        </div>
        <div className="stat">
          <h2>Goals Progress</h2>
          <p>{summary.goalsProgress}%</p>
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
