// src/pages/BudgetPage.js
// Importing necessary libraries and components
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Page.css';

// Functional component for the Budget Page
function BudgetPage() {
  // useState hooks for managing form inputs and budgets data
  const [budgets, setBudgets] = useState([]);
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalExpenses, setTotalExpenses] = useState({});

  // budgetCategories list
  const budgetCategories = [
    'Food', 'Transportation', 'Utilities', 'Healthcare', 'Entertainment',
    'Groceries', 'Rent', 'Savings', 'Insurance', 'Leisure', 'Other'
  ];

  // useEffect hook to fetch budgets and expenses when the component mounts
  useEffect(() => {
    // Fetch budgets from API
    axios.get('/api/budgets')
      .then(response => setBudgets(response.data))
      .catch(error => console.error("Error fetching budgets:", error));

    // Fetch expenses for each category
    budgetCategories.forEach(category => {
      axios.get('/api/expenses', { params: { category } })
        .then(response => {
          setTotalExpenses(prevExpenses => ({
            ...prevExpenses,
            [category]: response.data.total
          }));
        })
        .catch(error => console.error(`Error fetching expenses for ${category}:`, error));
    });
  }, []);

  // Handler function for adding a new budget
  const handleAddBudget = (e) => {
    e.preventDefault(); // Prevent default form submission
    const newBudget = { category, amount, startDate, endDate }; // Create a new budget object

    // Save budget to API
    axios.post('/api/budgets', newBudget)
      .then(response => setBudgets([...budgets, response.data]))
      .catch(error => console.error("Error adding budget:", error)); // Log any errors
  };

  // Render the budget form and list
  return (
    <div className="page">
      <h2>Budgets</h2>
      <form onSubmit={handleAddBudget}>
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="" disabled>Select Category</option>
          {budgetCategories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          placeholder="Start Date"
          required
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder="End Date"
          required
        />
        <button type="submit">Add Budget</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Budget Amount</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Total Expenses</th>
            <th>Remaining Budget</th>
          </tr>
        </thead>
        <tbody>
          {budgets.map(budget => {
            const totalExpense = totalExpenses[budget.category] || 0;
            const remainingBudget = budget.amount - totalExpense;
            return (
              <tr key={budget.id}>
                <td>{budget.category}</td>
                <td>{budget.amount}</td>
                <td>{budget.startDate}</td>
                <td>{budget.endDate}</td>
                <td>{totalExpense}</td>
                <td>{remainingBudget}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// Exporting the BudgetPage component as the default export
export default BudgetPage;
