// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../store/authActions';
import '../styles/NavBar.css';

function NavBar() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const handleSignOut = () => {
    dispatch(signOut());
  };

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

export default NavBar;
