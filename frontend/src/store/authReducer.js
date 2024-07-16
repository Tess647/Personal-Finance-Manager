// src/store/authReducer.js
import { SIGN_IN, SIGN_OUT, CHECK_AUTH } from './actionTypes';

const initialState = {
  isAuthenticated: false,
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    case CHECK_AUTH:
      return {
        ...state,
        isAuthenticated: !!localStorage.getItem('token'),
        token: localStorage.getItem('token'),
      };
    default:
      return state;
  }
};

export default authReducer;
