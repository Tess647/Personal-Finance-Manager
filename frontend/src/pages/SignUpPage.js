// src/pages/SignUpPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/FormPage.css';

function SignUpPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const newUser = { username, password };
    axios.post('/api/signup', newUser)
      .then(response => {
        console.log('Sign up successful:', response.data);
        navigate('/signin');
      })
      .catch(error => console.error('Error during sign up:', error));
  };

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

export default SignUpPage;
