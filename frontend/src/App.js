// src/App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { checkAuth } from './store/authActions';
import HomePage from './pages/HomePage';
import ExpensePage from './pages/ExpensePage';
import BudgetPage from './pages/BudgetPage';
import GoalPage from './pages/GoalPage';
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import NavBar from './components/NavBar'; 
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/home" element={<ProtectedRoute element={HomePage} />} />
          <Route path="/expenses" element={<ProtectedRoute element={ExpensePage} />} />
          <Route path="/budgets" element={<ProtectedRoute element={BudgetPage} />} />
          <Route path="/goals" element={<ProtectedRoute element={GoalPage} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
