// src/store/actions.js
import { addExpense, removeExpense, updateExpense } from './expenseReducer';
import { addBudget, removeBudget, updateBudget } from './budgetReducer';
import { addGoal, removeGoal, updateGoal } from './goalReducer';

export {
  addExpense, removeExpense, updateExpense,
  addBudget, removeBudget, updateBudget,
  addGoal, removeGoal, updateGoal
};
