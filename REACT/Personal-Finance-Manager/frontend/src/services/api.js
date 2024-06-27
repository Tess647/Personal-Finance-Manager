// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://your-api-url.com';

export const getExpenses = () => axios.get(`${API_BASE_URL}/expenses`);
export const addExpense = (expense) => axios.post(`${API_BASE_URL}/expenses`, expense);
export const getBudgets = () => axios.get(`${API_BASE_URL}/budgets`);
export const addBudget = (budget) => axios.post(`${API_BASE_URL}/budgets`, budget);
export const getGoals = () => axios.get(`${API_BASE_URL}/goals`);
export const addGoal = (goal) => axios.post(`${API_BASE_URL}/goals`, goal);
