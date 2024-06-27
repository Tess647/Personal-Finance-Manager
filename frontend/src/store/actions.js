// src/redux/actions.js
import {
    ADD_EXPENSE, REMOVE_EXPENSE, UPDATE_EXPENSE,
    ADD_BUDGET, REMOVE_BUDGET, UPDATE_BUDGET,
    ADD_GOAL, REMOVE_GOAL, UPDATE_GOAL
  } from './actionTypes';
  
  // Expense Actions
  export const addExpense = (expense) => ({
    type: ADD_EXPENSE,
    payload: expense
  });
  
  export const removeExpense = (id) => ({
    type: REMOVE_EXPENSE,
    payload: id
  });
  
  export const updateExpense = (expense) => ({
    type: UPDATE_EXPENSE,
    payload: expense
  });
  
  // Budget Actions
  export const addBudget = (budget) => ({
    type: ADD_BUDGET,
    payload: budget
  });
  
  export const removeBudget = (id) => ({
    type: REMOVE_BUDGET,
    payload: id
  });
  
  export const updateBudget = (budget) => ({
    type: UPDATE_BUDGET,
    payload: budget
  });
  
  // Goal Actions
  export const addGoal = (goal) => ({
    type: ADD_GOAL,
    payload: goal
  });
  
  export const removeGoal = (id) => ({
    type: REMOVE_GOAL,
    payload: id
  });
  
  export const updateGoal = (goal) => ({
    type: UPDATE_GOAL,
    payload: goal
  });
  