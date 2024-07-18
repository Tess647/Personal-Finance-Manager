// src/pages/SignUpPage.js
// Importing necessary libraries and components
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axiosConfig';
import '../styles/FormPage.css';

// Functional component for the Sign Up Page
function SignUpPage() {
  // useState hooks for managing form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  // useNavigate hook to programmatically navigate
  const navigate = useNavigate();

  // Handler function for sign up form submission
  const handleSignUp = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email address');
      return;
    }

    const newUser = { email, password, confirmPassword }; // Create a new user object

    // Make a POST request to the sign-up API endpoint
    axios.post('/users/signup', newUser)
      .then(response => {
        const { token } = response.data;
        localStorage.setItem('token', token);
        // Log success and navigate to sign-in page
        console.log('Sign up successful:', response);
        navigate('/home');
      })
      .catch(error => {
        console.error('Error during sign up:', error);
        setError('Sign up failed. Please try again.'); // Set error message
      });
  };

  // Render the sign up form
  return (
    <div className="form-page">
      <h2>Sign Up</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

// Exporting the SignUpPage component as the default export
export default SignUpPage;
