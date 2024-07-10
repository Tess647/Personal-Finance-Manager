// src/store/index.js

import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from './expenseReducer';
import budgetReducer from './budgetReducer';
import goalReducer from './goalReducer';
import authReducer from './authReducer';

// Configure the Redux store
const store = configureStore({
  reducer: {
    expenses: expenseReducer, // Reducer for handling expense state
    budgets: budgetReducer,   // Reducer for handling budget state
    goals: goalReducer,       // Reducer for handling goal state
    auth: authReducer,        // Reducer for handling authentication state
  },
});

export default store; // Export the configured store
