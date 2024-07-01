// src/store/authActions.js
import axios from 'axios';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const CHECK_AUTH = 'CHECK_AUTH';

export const signIn = (username, password) => async dispatch => {
  try {
    await axios.post('/api/signin', { username, password });
    dispatch({ type: SIGN_IN });
  } catch (error) {
    console.error("Error signing in:", error);
  }
};

export const signOut = () => async dispatch => {
  try {
    await axios.post('/api/signout');
    dispatch({ type: SIGN_OUT });
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

export const checkAuth = () => async dispatch => {
  try {
    const response = await axios.get('/api/check-auth'); // Adjust endpoint
    if (response.data.isAuthenticated) {
      dispatch({ type: SIGN_IN });
    } else {
      dispatch({ type: SIGN_OUT });
    }
  } catch (error) {
    console.error("Error checking authentication status:", error);
  }
};
