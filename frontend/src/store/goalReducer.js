// src/store/goalReducer.js

import { createSlice } from '@reduxjs/toolkit';

// Create a slice for goal-related state and actions
const goalSlice = createSlice({
  name: 'goals', // The name of the slice
  initialState: [], // The initial state is an empty array
  reducers: {
    /**
     * Add a new goal
     * @param {Array} state - The current state
     * @param {Object} action - The action dispatched
     */
    addGoal: (state, action) => {
      state.push(action.payload); // Add the new goal to the state array
    },
    /**
     * Remove a goal by id
     * @param {Array} state - The current state
     * @param {Object} action - The action dispatched
     * @returns {Array} - The new state after removal
     */
    removeGoal: (state, action) => {
      return state.filter(goal => goal.id !== action.payload.id); // Filter out the goal with the given id
    },
    /**
     * Update an existing goal by id
     * @param {Array} state - The current state
     * @param {Object} action - The action dispatched
     */
    updateGoal: (state, action) => {
      const index = state.findIndex(goal => goal.id === action.payload.id); // Find the index of the goal to update
      if (index !== -1) {
        state[index] = action.payload; // Update the goal if found
      }
    },
  },
});

// Export the action creators
export const { addGoal, removeGoal, updateGoal } = goalSlice.actions;

// Export the reducer to be used in the store
export default goalSlice.reducer;
