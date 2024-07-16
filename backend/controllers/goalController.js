const catchAsync = require('../utils/catchAsync');
const Goal = require('../models/goalModel');

exports.createGoal = catchAsync(async (req, res, next) => {
  const { goalName, targetAmount, deadline } = req.body;
  const userId = req.user.id;
  const newGoal = new Goal({
    goalName,
    targetAmount,
    deadline,
    user: userId,
  });
  await newGoal.save();
  res.status(201).json({
    status: 'success',
    data: {
      goal: newGoal,
    },
  });
});

exports.getAllGoals = catchAsync(async (req, res, next) => {
  const goals = await Goal.find();
  res.status(200).json({
    status: 'success',
    data: {
      goals,
    },
  });
});
