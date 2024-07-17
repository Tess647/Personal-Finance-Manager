// src/pages/ExpensePage.js
import React, { useState, useEffect } from 'react';
import axios from '../utils/axiosConfig';
import '../styles/Page.css';

const ExpensePage = () => {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [totalExpenses, setTotalExpenses] = useState({});
  const [error, setError] = useState('');

  const expenseCategories = [
    'Food', 'Transportation', 'Utilities', 'Healthcare', 'Entertainment',
    'Groceries', 'Rent', 'Savings', 'Insurance', 'Leisure', 'Other'
  ];

  useEffect(() => {
    axios.get('/expenses')
      .then(response => {
        setExpenses(response.data.data.expenses);
        calculateTotalExpenses(response.data.data.expenses);
      })
      .catch(error => {
        console.error("Error fetching expenses:", error);
        setError('Error fetching expenses');
      });
  }, []);

  const calculateTotalExpenses = (expenses) => {
    const totals = {};
    expenses.forEach(expense => {
      if (!totals[expense.category]) {
        totals[expense.category] = 0;
      }
      totals[expense.category] += parseFloat(expense.amount);
    });
    setTotalExpenses(totals);
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    const newExpense = { amount, category, date, description };

    axios.post('/expenses', newExpense)
      .then(response => {
        const updatedExpenses = [...expenses, response.data.data.expense];
        setExpenses(updatedExpenses);
        calculateTotalExpenses(updatedExpenses);
        setAmount('');
        setCategory('');
        setDate('');
        setDescription('');
      })
      .catch(error => {
        console.error("Error adding expense:", error);
        setError('Error adding expense');
      });
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
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
            {category}: ₦{totalExpenses[category].toFixed(2)}
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
              <td>{formatDate(expense.date)}</td>
              <td>{expense.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpensePage;
