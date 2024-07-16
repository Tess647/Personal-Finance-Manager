// src/store/goalActions.js
import axios from '../utils/axiosConfig';

// Define the action types
export const FETCH_GOALS_SUCCESS = 'FETCH_GOALS_SUCCESS';
export const FETCH_GOALS_FAILURE = 'FETCH_GOALS_FAILURE';

// Action creator for fetching goals
export const fetchGoals = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:5000/api/v1/goals');
    dispatch({
      type: FETCH_GOALS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_GOALS_FAILURE,
      payload: error.message,
    });
  }
};

// Action creator for adding a goal
export const addGoal = (newGoal) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:5000/api/v1/goals', newGoal);
    dispatch(fetchGoals()); // Fetch the updated goals after adding a new one
  } catch (error) {
    // Handle error accordingly
  }
};
