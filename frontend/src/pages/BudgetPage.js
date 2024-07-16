import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBudgets, addBudget, fetchTotalExpenses } from '../store/budgetActions';
import '../styles/Page.css';

const BudgetPage = () => {
  const dispatch = useDispatch();
  const budgets = useSelector(state => state.budgets.budgets || []);
  const totalExpenses = useSelector(state => state.budgets.totalExpenses || {});
  const error = useSelector(state => state.budgets.error);

  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const budgetCategories = [
    'Food', 'Transportation', 'Utilities', 'Healthcare', 'Entertainment',
    'Groceries', 'Rent', 'Savings', 'Insurance', 'Leisure', 'Other'
  ];

  useEffect(() => {
    dispatch(fetchBudgets());
    dispatch(fetchTotalExpenses());
  }, [dispatch]);

  const handleAddBudget = (e) => {
    e.preventDefault();
    const newBudget = { category, amount, startDate, endDate };
    dispatch(addBudget(newBudget));
    setCategory('');
    setAmount('');
    setStartDate('');
    setEndDate('');
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
