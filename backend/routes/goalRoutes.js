const express = require('express');
const goalController = require('../controllers/goalController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, goalController.getAllGoals)
  .post(authController.protect, goalController.createGoal);

module.exports = router;
