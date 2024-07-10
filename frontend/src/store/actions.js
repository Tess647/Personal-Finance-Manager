// src/store/actions.js

// Importing action types
import {
  ADD_EXPENSE, REMOVE_EXPENSE, UPDATE_EXPENSE,
  ADD_BUDGET, REMOVE_BUDGET, UPDATE_BUDGET,
  ADD_GOAL, REMOVE_GOAL, UPDATE_GOAL
} from './actionTypes';

// Expense Actions

/**
 * Action to add a new expense
 * @param {Object} expense - The expense to be added
 * @returns {Object} - Action object with type and payload
 */
export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense
});

/**
 * Action to remove an expense by id
 * @param {number} id - The id of the expense to be removed
 * @returns {Object} - Action object with type and payload
 */
export const removeExpense = (id) => ({
  type: REMOVE_EXPENSE,
  payload: id
});

/**
 * Action to update an existing expense
 * @param {Object} expense - The expense to be updated
 * @returns {Object} - Action object with type and payload
 */
export const updateExpense = (expense) => ({
  type: UPDATE_EXPENSE,
  payload: expense
});

// Budget Actions

/**
 * Action to add a new budget
 * @param {Object} budget - The budget to be added
 * @returns {Object} - Action object with type and payload
 */
export const addBudget = (budget) => ({
  type: ADD_BUDGET,
  payload: budget
});

/**
 * Action to remove a budget by id
 * @param {number} id - The id of the budget to be removed
 * @returns {Object} - Action object with type and payload
 */
export const removeBudget = (id) => ({
  type: REMOVE_BUDGET,
  payload: id
});

/**
 * Action to update an existing budget
 * @param {Object} budget - The budget to be updated
 * @returns {Object} - Action object with type and payload
 */
export const updateBudget = (budget) => ({
  type: UPDATE_BUDGET,
  payload: budget
});

// Goal Actions

/**
 * Action to add a new goal
 * @param {Object} goal - The goal to be added
 * @returns {Object} - Action object with type and payload
 */
export const addGoal = (goal) => ({
  type: ADD_GOAL,
  payload: goal
});

/**
 * Action to remove a goal by id
 * @param {number} id - The id of the goal to be removed
 * @returns {Object} - Action object with type and payload
 */
export const removeGoal = (id) => ({
  type: REMOVE_GOAL,
  payload: id
});

/**
 * Action to update an existing goal
 * @param {Object} goal - The goal to be updated
 * @returns {Object} - Action object with type and payload
 */
export const updateGoal = (goal) => ({
  type: UPDATE_GOAL,
  payload: goal
});
