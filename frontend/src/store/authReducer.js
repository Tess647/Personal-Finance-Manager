// src/store/authReducer.js

import { SIGN_IN, SIGN_OUT } from './actionTypes';

// Initial state for the authentication reducer
const initialState = {
  isAuthenticated: false, // Initial state is not authenticated
};

/**
 * Authentication reducer function
 * @param {Object} state - The current state
 * @param {Object} action - The action dispatched
 * @returns {Object} - The new state after applying the action
 */
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      // Set isAuthenticated to true on SIGN_IN action
      return { ...state, isAuthenticated: true };
    case SIGN_OUT:
      // Set isAuthenticated to false on SIGN_OUT action
      return { ...state, isAuthenticated: false };
    default:
      // Return the current state for any other action
      return state;
  }
}
