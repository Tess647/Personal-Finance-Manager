const express = require('express');
const expenseController = require('../controllers/expenseController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, expenseController.getAllExpenses)
  .post(authController.protect, expenseController.createExpense);

module.exports = router;
