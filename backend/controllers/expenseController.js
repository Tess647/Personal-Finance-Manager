const catchAsync = require('../utils/catchAsync');
const Expense = require('../models/expenseModel');

(exports.createExpense = catchAsync(async (req, res, next) => {
  const { category, amount, date, description } = req.body;
  const userId = req.user.id;
  const newExpense = new Expense({
    category,
    amount,
    date,
    description,
    user: userId,
  });
  await newExpense.save();
  res.status(201).json({
    status: 'success',
    data: {
      expense: newExpense,
    },
  });
})),
  (exports.getAllExpenses = catchAsync(async (req, res, next) => {
    const expenses = await Expense.find();
    res.status(200).json({
      status: 'success',
      data: {
        expenses,
      },
    });
  }));
