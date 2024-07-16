// src/pages/GoalPage.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGoals, addGoal } from '../store/goalActions';
import '../styles/Page.css';

const GoalPage = () => {
  const dispatch = useDispatch();
  const goals = useSelector(state => state.goals.goals || []);
  const error = useSelector(state => state.goals.error);

  const [goalName, setGoalName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [deadline, setDeadline] = useState('');

  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  const handleAddGoal = (e) => {
    e.preventDefault();
    const newGoal = { goalName, targetAmount, deadline };
    dispatch(addGoal(newGoal));
    setGoalName('');
    setTargetAmount('');
    setDeadline('');
  };

  return (
    <div className="page">
      <h2>Goals</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleAddGoal}>
        <input
          type="text"
          value={goalName}
          onChange={(e) => setGoalName(e.target.value)}
          placeholder="Goal Name"
          required
        />
        <input
          type="number"
          value={targetAmount}
          onChange={(e) => setTargetAmount(e.target.value)}
          placeholder="Target Amount"
          required
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          placeholder="Deadline"
          required
        />
        <button type="submit">Add Goal</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Goal Name</th>
            <th>Target Amount</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {goals.map(goal => (
            <tr key={goal.id}>
              <td>{goal.goalName}</td>
              <td>{goal.targetAmount}</td>
              <td>{goal.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GoalPage;
