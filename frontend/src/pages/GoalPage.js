// src/pages/GoalPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Page.css';

function GoalPage() {
  const [goals, setGoals] = useState([]);
  const [goalName, setGoalName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [deadline, setDeadline] = useState('');

  useEffect(() => {
    // Fetch goals from API
    axios.get('/api/goals')
      .then(response => setGoals(response.data))
      .catch(error => console.error("Error fetching goals:", error));
  }, []);

  const handleAddGoal = (e) => {
    e.preventDefault();
    const newGoal = { goalName, targetAmount, deadline };
    // Save goal to API
    axios.post('/api/goals', newGoal)
      .then(response => setGoals([...goals, response.data]))
      .catch(error => console.error("Error adding goal:", error));
  };

  return (
    <div className="page">
      <h2>Goals</h2>
      <form onSubmit={handleAddGoal}>
        <input type="text" value={goalName} onChange={(e) => setGoalName(e.target.value)} placeholder="Goal Name" required />
        <input type="number" value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)} placeholder="Target Amount" required />
        <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} placeholder="Deadline" required />
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
}

export default GoalPage;
