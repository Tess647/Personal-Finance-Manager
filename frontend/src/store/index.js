// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from './expenseReducer';
import budgetReducer from './budgetReducer';
import goalReducer from './goalReducer';
import authReducer from './authReducer';

const store = configureStore({
  reducer: {
    expenses: expenseReducer,
    budgets: budgetReducer,
    goals: goalReducer,
    auth: authReducer,
  },
});

export default store;
