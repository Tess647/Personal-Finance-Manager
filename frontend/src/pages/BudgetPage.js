// src/pages/BudgetPage.js
import React, { useState, useEffect } from 'react';
import axios from '../utils/axiosConfig';
import '../styles/Page.css';

const BudgetPage = () => {
  const [budgets, setBudgets] = useState([]);
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalExpenses, setTotalExpenses] = useState({});
  const [error, setError] = useState('');

  const budgetCategories = [
    'Food', 'Transportation', 'Utilities', 'Healthcare', 'Entertainment',
    'Groceries', 'Rent', 'Savings', 'Insurance', 'Leisure', 'Other'
  ];

  useEffect(() => {
    const fetchBudgetsAndExpenses = async () => {
      try {
        const budgetResponse = await axios.get('/api/budgets');
        setBudgets(budgetResponse.data);
        const expensePromises = budgetCategories.map(category =>
          axios.get('/api/expenses', { params: { category } })
        );
        const expenseResponses = await Promise.all(expensePromises);
        const expenses = expenseResponses.reduce((acc, response, index) => {
          acc[budgetCategories[index]] = response.data.total;
          return acc;
        }, {});
        setTotalExpenses(expenses);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError('Error fetching budgets and expenses');
      }
    };
    fetchBudgetsAndExpenses();
  }, []); // Remove budgetCategories from the dependency array
  

  const handleAddBudget = async (e) => {
    e.preventDefault();
    const newBudget = { category, amount, startDate, endDate };
    try {
      const response = await axios.post('/api/budgets', newBudget);
      setBudgets([...budgets, response.data]);
      setCategory('');
      setAmount('');
      setStartDate('');
      setEndDate('');
    } catch (err) {
      console.error("Error adding budget:", err);
      setError('Error adding budget');
    }
  };

  return (
    <div className="page">
      <h2>Budgets</h2>
      {error && <p className="error">{error}</p>}
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
};

export default BudgetPage;
