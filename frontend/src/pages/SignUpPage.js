// src/pages/SignUpPage.js
// Importing necessary libraries and components
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/FormPage.css';

// Functional component for the Sign Up Page
function SignUpPage() {
  // useState hooks for managing form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // useNavigate hook to programmatically navigate
  const navigate = useNavigate();

  // Handler function for sign up form submission
  const handleSignUp = (e) => {
    e.preventDefault(); // Prevent default form submission
    const newUser = { username, password }; // Create a new user object
    
    // Make a POST request to the sign-up API endpoint
    axios.post('/api/signup', newUser)
      .then(response => {
        // Log success and navigate to sign-in page
        console.log('Sign up successful:', response.data);
        navigate('/signin');
      })
      .catch(error => console.error('Error during sign up:', error)); // Log any errors
  };

  // Render the sign up form
  return (
    <div className="form-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

// Exporting the SignUpPage component as the default export
export default SignUpPage;
