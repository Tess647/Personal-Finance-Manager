const express = require('express');
const morgan = require('morgan');

const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');
const userRouter = require('./routes/userRoutes');

const app = express();

// Use morgan for logging in development environment
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Middleware to parse JSON
app.use(express.json());

// Mounting the userRouter on /api/v1/users route
app.use('/api/v1/users', userRouter);

// Catch-all route handler for undefined routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handling middleware
app.use(globalErrorHandler);

module.exports = app;
