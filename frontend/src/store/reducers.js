// src/redux/reducers.js
import {
  ADD_EXPENSE, REMOVE_EXPENSE, UPDATE_EXPENSE,
  ADD_BUDGET, REMOVE_BUDGET, UPDATE_BUDGET,
  ADD_GOAL, REMOVE_GOAL, UPDATE_GOAL
} from './actionTypes';

// Initial States
const initialExpensesState = [];
const initialBudgetsState = [];
const initialGoalsState = [];

// Expense Reducer
const expensesReducer = (state = initialExpensesState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.payload];
    case REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== action.payload);
    case UPDATE_EXPENSE:
      return state.map(expense => expense.id === action.payload.id ? action.payload : expense);
    default:
      return state;
  }
};

// Budget Reducer
const budgetsReducer = (state = initialBudgetsState, action) => {
  switch (action.type) {
    case ADD_BUDGET:
      return [...state, action.payload];
    case REMOVE_BUDGET:
      return state.filter(budget => budget.id !== action.payload);
    case UPDATE_BUDGET:
      return state.map(budget => budget.id === action.payload.id ? action.payload : budget);
    default:
      return state;
  }
};

// Goal Reducer
const goalsReducer = (state = initialGoalsState, action) => {
  switch (action.type) {
    case ADD_GOAL:
      return [...state, action.payload];
    case REMOVE_GOAL:
      return state.filter(goal => goal.id !== action.payload);
    case UPDATE_GOAL:
      return state.map(goal => goal.id === action.payload.id ? action.payload : goal);
    default:
      return state;
  }
};

// Combine Reducers
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  expenses: expensesReducer,
  budgets: budgetsReducer,
  goals: goalsReducer
});

export default rootReducer;
