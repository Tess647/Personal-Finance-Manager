// src/store/budgetActions.js
import axios from '../utils/axiosConfig';

// Define the action types
export const FETCH_BUDGETS_SUCCESS = 'FETCH_BUDGETS_SUCCESS';
export const FETCH_BUDGETS_FAILURE = 'FETCH_BUDGETS_FAILURE';
export const ADD_BUDGET_SUCCESS = 'ADD_BUDGET_SUCCESS';
export const ADD_BUDGET_FAILURE = 'ADD_BUDGET_FAILURE';
export const FETCH_TOTAL_EXPENSES_SUCCESS = 'FETCH_TOTAL_EXPENSES_SUCCESS';
export const FETCH_TOTAL_EXPENSES_FAILURE = 'FETCH_TOTAL_EXPENSES_FAILURE';

// Action creator for fetching budgets
export const fetchBudgets = () => async dispatch => {
  try {
    const response = await axios.get('/api/budgets');
    dispatch({
      type: FETCH_BUDGETS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_BUDGETS_FAILURE,
      payload: error.message,
    });
  }
};

// Action creator for adding a budget
export const addBudget = (newBudget) => async dispatch => {
  try {
    const response = await axios.post('/api/budgets', newBudget);
    dispatch({
      type: ADD_BUDGET_SUCCESS,
      payload: response.data,
    });
    dispatch(fetchBudgets()); // Fetch the updated budgets after adding a new one
  } catch (error) {
    dispatch({
      type: ADD_BUDGET_FAILURE,
      payload: error.message,
    });
  }
};

// Action creator for fetching total expenses by category
export const fetchTotalExpenses = () => async dispatch => {
  try {
    const response = await axios.get('/api/expenses/total');
    dispatch({
      type: FETCH_TOTAL_EXPENSES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_TOTAL_EXPENSES_FAILURE,
      payload: error.message,
    });
  }
};
