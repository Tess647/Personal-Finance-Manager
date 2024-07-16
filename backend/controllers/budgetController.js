const Budget = require('../models/budgetModel');
const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');

exports.createBudget = catchAsync(async (req, res, next) => {
  const { category, amount, startDate, endDate } = req.body;
  const userId = req.user.id;
  console.log('user_id:', req.user.id);
  const newBudget = new Budget({
    category,
    amount,
    startDate,
    endDate,
    user: userId,
  });
  console.log(newBudget);
  await newBudget.save();
  //await User.findByIdAndUpdate(userId, { $push: { budgets: newBudget._id } });
  res.status(201).json({
    status: 'success',
    data: {
      budget: newBudget,
    },
  });
});

exports.getAllBudgets = catchAsync(async (req, res, next) => {
  const userId = req.user.id; // Get the user ID from the request object

  const features = new APIFeatures(
    Budget.find({ user: userId }),
    req.query,
  ).filter();

  const budgets = await features.query; // Find all budgets for the user

  // // Check if budgets is an array
  // if (!Array.isArray(budgets)) {
  //   console.error('Budgets is not an array:', budgets);
  //   return res
  //     .status(500)
  //     .json({ message: 'Unexpected error: budgets is not an array' });
  // }

  // For each budget, calculate the total expenses and return the budget with the total expenses
  const budgetsWithExpenses = await Promise.all(
    budgets.map(async (budget) => {
      const totalExpenses = await budget.calculateTotalExpenses(); // Calculate total expenses for the budget
      // Return a new object that includes the budget's data and the total expenses
      return { ...budget._doc, totalExpenses };
    }),
  );

  res.status(200).json({
    status: 'success',
    data: {
      budgetsWithExpenses,
    },
  });
});
