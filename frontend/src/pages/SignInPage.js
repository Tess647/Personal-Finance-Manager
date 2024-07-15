// src/pages/SignInPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../store/authActions';
//import axios from 'axios';
import '../styles/FormPage.css';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(signIn(email, password, navigate)); // Pass navigate to signIn action
  };

  return (
    <div className="form-page">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
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
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignInPage;
