// src/store/goalReducer.js
import { createSlice } from '@reduxjs/toolkit';

const goalSlice = createSlice({
  name: 'goals',
  initialState: [],
  reducers: {
    addGoal: (state, action) => {
      state.push(action.payload);
    },
    removeGoal: (state, action) => {
      return state.filter(goal => goal.id !== action.payload.id);
    },
    updateGoal: (state, action) => {
      const index = state.findIndex(goal => goal.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addGoal, removeGoal, updateGoal } = goalSlice.actions;
export default goalSlice.reducer;
