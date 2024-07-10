// src/components/NavBar.js
// Importing necessary libraries and components
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../store/authActions';
import '../styles/NavBar.css';

// Functional component for the Navigation Bar
function NavBar() {
  // useDispatch hook to dispatch actions
  const dispatch = useDispatch();
  // useSelector hook to access the state
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  // Handler function for signing out
  const handleSignOut = () => {
    dispatch(signOut());
  };

  // Render the navigation bar
  return (
    <nav className="navbar">
      <ul>
        {isAuthenticated ? (
          <>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/expenses">Expenses</Link></li>
            <li><Link to="/budgets">Budgets</Link></li>
            <li><Link to="/goals">Goals</Link></li>
            <li><button onClick={handleSignOut}>Sign Out</button></li>
          </>
        ) : (
          <>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

// Exporting the NavBar component as the default export
export default NavBar;
