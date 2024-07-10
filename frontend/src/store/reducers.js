// src/redux/reducers.js

// Import action types
import {
  ADD_EXPENSE, REMOVE_EXPENSE, UPDATE_EXPENSE,
  ADD_BUDGET, REMOVE_BUDGET, UPDATE_BUDGET,
  ADD_GOAL, REMOVE_GOAL, UPDATE_GOAL
} from './actionTypes';

// Initial States
const initialExpensesState = []; // Initial state for expenses
const initialBudgetsState = [];  // Initial state for budgets
const initialGoalsState = [];    // Initial state for goals

// Expense Reducer
const expensesReducer = (state = initialExpensesState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.payload]; // Add new expense to the state
    case REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== action.payload); // Remove expense by id
    case UPDATE_EXPENSE:
      return state.map(expense => expense.id === action.payload.id ? action.payload : expense); // Update expense by id
    default:
      return state; // Return current state if no action matches
  }
};

// Budget Reducer
const budgetsReducer = (state = initialBudgetsState, action) => {
  switch (action.type) {
    case ADD_BUDGET:
      return [...state, action.payload]; // Add new budget to the state
    case REMOVE_BUDGET:
      return state.filter(budget => budget.id !== action.payload); // Remove budget by id
    case UPDATE_BUDGET:
      return state.map(budget => budget.id === action.payload.id ? action.payload : budget); // Update budget by id
    default:
      return state; // Return current state if no action matches
  }
};

// Goal Reducer
const goalsReducer = (state = initialGoalsState, action) => {
  switch (action.type) {
    case ADD_GOAL:
      return [...state, action.payload]; // Add new goal to the state
    case REMOVE_GOAL:
      return state.filter(goal => goal.id !== action.payload); // Remove goal by id
    case UPDATE_GOAL:
      return state.map(goal => goal.id === action.payload.id ? action.payload : goal); // Update goal by id
    default:
      return state; // Return current state if no action matches
  }
};

// Combine Reducers
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  expenses: expensesReducer, // Combine expenses reducer
  budgets: budgetsReducer,   // Combine budgets reducer
  goals: goalsReducer        // Combine goals reducer
});

export default rootReducer; // Export the combined reducers as the root reducer
