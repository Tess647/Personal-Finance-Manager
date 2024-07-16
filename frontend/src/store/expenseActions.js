// src/store/expenseActions.js
import axios from '../utils/axiosConfig';

// Define the action types
export const FETCH_EXPENSES_SUCCESS = 'FETCH_EXPENSES_SUCCESS';
export const FETCH_EXPENSES_FAILURE = 'FETCH_EXPENSES_FAILURE';
export const ADD_EXPENSE_SUCCESS = 'ADD_EXPENSE_SUCCESS';
export const ADD_EXPENSE_FAILURE = 'ADD_EXPENSE_FAILURE';

// Action creator for fetching expenses
export const fetchExpenses = () => async dispatch => {
  try {
    const response = await axios.get('/api/expenses');
    dispatch({
      type: FETCH_EXPENSES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_EXPENSES_FAILURE,
      payload: error.message,
    });
  }
};

// Action creator for adding an expense
export const addExpense = (newExpense) => async dispatch => {
  try {
    const response = await axios.post('/api/expenses', newExpense);
    dispatch({
      type: ADD_EXPENSE_SUCCESS,
      payload: response.data,
    });
    dispatch(fetchExpenses()); // Fetch the updated expenses after adding a new one
  } catch (error) {
    dispatch({
      type: ADD_EXPENSE_FAILURE,
      payload: error.message,
    });
  }
};
