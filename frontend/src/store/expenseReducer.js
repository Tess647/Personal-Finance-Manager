// src/store/expenseReducer.js

import { createSlice } from '@reduxjs/toolkit';

// Create a slice for expense-related state and actions
const expenseSlice = createSlice({
  name: 'expenses', // The name of the slice
  initialState: [], // The initial state is an empty array
  reducers: {
    /**
     * Add a new expense
     * @param {Array} state - The current state
     * @param {Object} action - The action dispatched
     */
    addExpense: (state, action) => {
      state.push(action.payload); // Add the new expense to the state array
    },
    /**
     * Remove an expense by id
     * @param {Array} state - The current state
     * @param {Object} action - The action dispatched
     * @returns {Array} - The new state after removal
     */
    removeExpense: (state, action) => {
      return state.filter(expense => expense.id !== action.payload.id); // Filter out the expense with the given id
    },
    /**
     * Update an existing expense by id
     * @param {Array} state - The current state
     * @param {Object} action - The action dispatched
     */
    updateExpense: (state, action) => {
      const index = state.findIndex(expense => expense.id === action.payload.id); // Find the index of the expense to update
      if (index !== -1) {
        state[index] = action.payload; // Update the expense if found
      }
    },
  },
});

// Export the action creators
export const { addExpense, removeExpense, updateExpense } = expenseSlice.actions;

// Export the reducer to be used in the store
export default expenseSlice.reducer;
