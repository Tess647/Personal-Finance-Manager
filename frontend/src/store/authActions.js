// src/store/authActions.js

import axios from 'axios';

// Action types for authentication
export const SIGN_IN = 'SIGN_IN'; // Action type for sign in
export const SIGN_OUT = 'SIGN_OUT'; // Action type for sign out
export const CHECK_AUTH = 'CHECK_AUTH'; // Action type for checking authentication

/**
 * Action creator for signing in
 * @param {string} username - The username for sign in
 * @param {string} password - The password for sign in
 * @returns {Function} - Dispatches the sign in action
 */
export const signIn = (username, password) => async dispatch => {
  try {
    // Make a POST request to sign in the user
    await axios.post('/api/signin', { username, password });
    // Dispatch the SIGN_IN action if successful
    dispatch({ type: SIGN_IN });
  } catch (error) {
    // Log any errors that occur during sign in
    console.error("Error signing in:", error);
  }
};

/**
 * Action creator for signing out
 * @returns {Function} - Dispatches the sign out action
 */
export const signOut = () => async dispatch => {
  try {
    // Make a POST request to sign out the user
    await axios.post('/api/signout');
    // Dispatch the SIGN_OUT action if successful
    dispatch({ type: SIGN_OUT });
  } catch (error) {
    // Log any errors that occur during sign out
    console.error("Error signing out:", error);
  }
};

/**
 * Action creator for checking authentication status
 * @returns {Function} - Dispatches the appropriate action based on auth status
 */
export const checkAuth = () => async dispatch => {
  try {
    // Make a GET request to check the user's authentication status
    const response = await axios.get('/api/check-auth'); // Adjust endpoint as necessary
    if (response.data.isAuthenticated) {
      // Dispatch the SIGN_IN action if user is authenticated
      dispatch({ type: SIGN_IN });
    } else {
      // Dispatch the SIGN_OUT action if user is not authenticated
      dispatch({ type: SIGN_OUT });
    }
  } catch (error) {
    // Log any errors that occur while checking auth status
    console.error("Error checking authentication status:", error);
  }
};
