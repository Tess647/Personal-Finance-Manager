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
      <h2>About the Project</h2>
        <p>Chremeta aims to provide a simple, user-friendly application for tracking daily expenses and income, setting savings goals, and budgeting to control spending. I created this project to fulfill my personal need for an intuitive finance manager.</p>
        <p>This project was inspired by my personal experience with complex finance management tools. I wanted something simpler and more user-friendly. This project also serves as a Portfolio Project for Holberton School.</p>
      <div className="landing-buttons">
        <Link to="/signup" className="btn">Sign Up</Link>
        <Link to="/signin" className="btn">Sign In</Link>
      </div>
    </div>
  );
}

// Exporting the LandingPage component as the default export
export default LandingPage;
