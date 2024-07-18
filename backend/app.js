const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');
const userRouter = require('./routes/userRoutes');
const budgetRouter = require('./routes/budgetRoutes');
const expenseRouter = require('./routes/expenseRoutes');
const goalRouter = require('./routes/goalRoutes');

const app = express();

// Use morgan for logging in development environment
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(
  cors()
);
// Middleware to parse JSON
app.use(express.json());
app.use('/api/v1/budgets', budgetRouter);
app.use('/api/v1/expenses', expenseRouter);
app.use('/api/v1/goals', goalRouter);

// Mounting the userRouter on /api/v1/users route
app.use('/api/v1/users', userRouter);

// Catch-all route handler for undefined routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handling middleware
app.use(globalErrorHandler);

module.exports = app;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});
