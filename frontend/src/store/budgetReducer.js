// src/store/budgetReducer.js

import { createSlice } from '@reduxjs/toolkit';

// Create a slice for budget-related state and actions
const budgetSlice = createSlice({
  name: 'budgets', // The name of the slice
  initialState: [], // The initial state is an empty array
  reducers: {
    /**
     * Add a new budget
     * @param {Array} state - The current state
     * @param {Object} action - The action dispatched
     */
    addBudget: (state, action) => {
      state.push(action.payload); // Add the new budget to the state array
    },
    /**
     * Remove a budget by id
     * @param {Array} state - The current state
     * @param {Object} action - The action dispatched
     * @returns {Array} - The new state after removal
     */
    removeBudget: (state, action) => {
      return state.filter(budget => budget.id !== action.payload.id); // Filter out the budget with the given id
    },
    /**
     * Update an existing budget by id
     * @param {Array} state - The current state
     * @param {Object} action - The action dispatched
     */
    updateBudget: (state, action) => {
      const index = state.findIndex(budget => budget.id === action.payload.id); // Find the index of the budget to update
      if (index !== -1) {
        state[index] = action.payload; // Update the budget if found
      }
    },
  },
});

// Export the action creators
export const { addBudget, removeBudget, updateBudget } = budgetSlice.actions;

// Export the reducer to be used in the store
export default budgetSlice.reducer;
