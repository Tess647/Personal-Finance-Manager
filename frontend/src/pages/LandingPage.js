// src/pages/LandingPage.js
// Importing necessary libraries and components
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

// Functional component for the Landing Page
function LandingPage() {
  // Render the landing page content
  return (
    <div className="landing-page">
      <h1>Welcome to Budget Tracker</h1>
      <p>Manage your expenses, budgets, and goals efficiently!</p>
      <div className="landing-buttons">
        <Link to="/signup" className="btn">Sign Up</Link>
        <Link to="/signin" className="btn">Sign In</Link>
      </div>
    </div>
  );
}

// Exporting the LandingPage component as the default export
export default LandingPage;
