// src/pages/ExpensePage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Page.css';

function ExpensePage() {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    // Fetch expenses from API
    axios.get('/api/expenses')
      .then(response => setExpenses(response.data))
      .catch(error => console.error("Error fetching expenses:", error));
  }, []);

  const handleAddExpense = (e) => {
    e.preventDefault();
    const newExpense = { amount, category, date, description };
    // Save expense to API
    axios.post('/api/expenses', newExpense)
      .then(response => setExpenses([...expenses, response.data]))
      .catch(error => console.error("Error adding expense:", error));
  };

  return (
    <div className="page">
      <h2>Expenses</h2>
      <form onSubmit={handleAddExpense}>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" required />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
        <button type="submit">Add Expense</button>
      </form>
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
}

export default ExpensePage;
