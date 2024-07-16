// src/pages/ExpensePage.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchExpenses, addExpense } from '../store/expenseActions';
import '../styles/Page.css';

const ExpensePage = () => {
  const dispatch = useDispatch();
  const expenses = useSelector(state => state.expenses.expenses || []);
  const totalExpenses = useSelector(state => state.expenses.totalExpenses || {});
  const error = useSelector(state => state.expenses.error);

  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const expenseCategories = [
    'Food', 'Transportation', 'Utilities', 'Healthcare', 'Entertainment',
    'Groceries', 'Rent', 'Savings', 'Insurance', 'Leisure', 'Other'
  ];

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  const handleAddExpense = (e) => {
    e.preventDefault();
    const newExpense = { amount, category, date, description };
    dispatch(addExpense(newExpense));
    setAmount('');
    setCategory('');
    setDate('');
    setDescription('');
  };

  return (
    <div className="page">
      <h2>Expenses</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleAddExpense}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required>
          <option value="" disabled>Select Category</option>
          {expenseCategories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <button type="submit">Add Expense</button>
      </form>
      <h3>Total Expenses by Category</h3>
      <ul>
        {Object.keys(totalExpenses).map(category => (
          <li key={category}>
            {category}: ${totalExpenses[category].toFixed(2)}
          </li>
        ))}
      </ul>
      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(expense => (
            <tr key={expense.id}>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>{expense.date}</td>
              <td>{expense.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpensePage;
