// src/store/authActions.js
import axios from '../utils/axiosConfig';
import { SIGN_IN, SIGN_OUT } from './actionTypes';

// Action creator for signing in
export const signIn = (email, password, navigate) => async dispatch => {
  try {
    const response = await axios.post('/users/login', { email, password });
    const { token } = response.data;
    localStorage.setItem('token', token); // Store the token in localStorage
    dispatch({ type: SIGN_IN, payload: token }); // Update the Redux store
    navigate('/home'); // Navigate to the homepage
  } catch (error) {
    console.error("Error signing in:", error);
  }
};

// Action creator for signing out
export const signOut = () => async dispatch => {
  try {
    await axios.post('/users/logout');
    localStorage.removeItem('token'); // Remove the token from localStorage
    dispatch({ type: SIGN_OUT });
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

// Action creator for checking authentication status
//export const checkAuth = () => async dispatch => {
//  try {
//    const response = await axios.get('/users/check-auth');
//    if (response.data.isAuthenticated) {
//      dispatch({ type: SIGN_IN });
//    } else {
//      dispatch({ type: SIGN_OUT });
//    }
//  } catch (error) {
//    console.error("Error checking authentication status:", error);
//  }
//};
