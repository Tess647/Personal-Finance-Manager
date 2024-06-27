// src/pages/SignInPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/FormPage.css';

function SignInPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const user = { username, password };
    axios.post('/api/signin', user)
      .then(response => {
        console.log('Sign in successful:', response.data);
        navigate('/home');
      })
      .catch(error => console.error('Error during sign in:', error));
  };

  return (
    <div className="form-page">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignInPage;
