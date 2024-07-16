const express = require('express');
const budgetController = require('../controllers/budgetController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, budgetController.getAllBudgets)
  .post(authController.protect, budgetController.createBudget);

module.exports = router;
