// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from './expenseReducer';
import budgetReducer from './budgetReducer';
import goalReducer from './goalReducer';

const store = configureStore({
  reducer: {
    expenses: expenseReducer,
    budgets: budgetReducer,
    goals: goalReducer,
  },
});

export default store;
