// src/pages/BudgetPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Page.css';

function BudgetPage() {
  const [budgets, setBudgets] = useState([]);
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    // Fetch budgets from API
    axios.get('/api/budgets')
      .then(response => setBudgets(response.data))
      .catch(error => console.error("Error fetching budgets:", error));
  }, []);

  const handleAddBudget = (e) => {
    e.preventDefault();
    const newBudget = { category, amount, startDate, endDate };
    // Save budget to API
    axios.post('/api/budgets', newBudget)
      .then(response => setBudgets([...budgets, response.data]))
      .catch(error => console.error("Error adding budget:", error));
  };

  return (
    <div className="page">
      <h2>Budgets</h2>
      <form onSubmit={handleAddBudget}>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} placeholder="Start Date" required />
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} placeholder="End Date" required />
        <button type="submit">Add Budget</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {budgets.map(budget => (
            <tr key={budget.id}>
              <td>{budget.category}</td>
              <td>{budget.amount}</td>
              <td>{budget.startDate}</td>
              <td>{budget.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BudgetPage;
