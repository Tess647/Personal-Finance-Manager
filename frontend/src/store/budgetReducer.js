// src/store/budgetReducer.js
import { createSlice } from '@reduxjs/toolkit';

const budgetSlice = createSlice({
  name: 'budgets',
  initialState: [],
  reducers: {
    addBudget: (state, action) => {
      state.push(action.payload);
    },
    removeBudget: (state, action) => {
      return state.filter(budget => budget.id !== action.payload.id);
    },
    updateBudget: (state, action) => {
      const index = state.findIndex(budget => budget.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addBudget, removeBudget, updateBudget } = budgetSlice.actions;

export default budgetSlice.reducer;
