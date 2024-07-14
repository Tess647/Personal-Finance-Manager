// src/pages/ExpensePage.js
// Importing necessary libraries and components
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Page.css';

// Functional component for the Expense Page
function ExpensePage() {
  // useState hooks for managing form inputs and expenses data
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [totalExpenses, setTotalExpenses] = useState({});

  // expenseCategories list
  const expenseCategories = [
    'Food', 'Transportation', 'Utilities', 'Healthcare', 'Entertainment',
    'Groceries', 'Rent', 'Savings', 'Insurance', 'Leisure', 'Other'
  ];

  // useEffect hook to fetch expenses when the component mounts
  useEffect(() => {
    // Fetch expenses from API
    axios.get('/api/expenses')
      .then(response => {
        setExpenses(response.data);
        calculateTotalExpenses(response.data);
      })
      .catch(error => console.error("Error fetching expenses:", error));
  }, []);

  // Function to calculate total expenses by category
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

  // Handler function for adding a new expense
  const handleAddExpense = (e) => {
    e.preventDefault(); // Prevent default form submission
    const newExpense = { amount, category, date, description }; // Create a new expense object

    // Save expense to API
    axios.post('/api/expenses', newExpense)
      .then(response => {
        const updatedExpenses = [...expenses, response.data];
        setExpenses(updatedExpenses);
        calculateTotalExpenses(updatedExpenses); // Recalculate totals
      })
      .catch(error => console.error("Error adding expense:", error)); // Log any errors
  };

  // Render the expense form and list
  return (
    <div className="page">
      <h2>Expenses</h2>
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
}

// Exporting the ExpensePage component as the default export
export default ExpensePage;
