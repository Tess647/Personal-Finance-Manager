// src/services/api.js
// Importing axios for making HTTP requests
import axios from 'axios';

// Base URL for the API
const API_BASE_URL = 'http://your-api-url.com';

// Function to get all expenses
export const getExpenses = () => axios.get(`${API_BASE_URL}/expenses`);

// Function to add a new expense
export const addExpense = (expense) => axios.post(`${API_BASE_URL}/expenses`, expense);

// Function to get all budgets
export const getBudgets = () => axios.get(`${API_BASE_URL}/budgets`);

// Function to add a new budget
export const addBudget = (budget) => axios.post(`${API_BASE_URL}/budgets`, budget);

// Function to get all goals
export const getGoals = () => axios.get(`${API_BASE_URL}/goals`);

// Function to add a new goal
export const addGoal = (goal) => axios.post(`${API_BASE_URL}/goals`, goal);
