const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

budgetSchema.methods.calculateTotalExpenses = async function () {
  const Expense = mongoose.model('Expense');
  const expenses = await Expense.aggregate([
    {
      $match: {
        category: this.category,
        date: { $gte: this.startDate, $lte: this.endDate },
        user: this.user,
      },
    },
    { $group: { _id: null, total: { $sum: '$amount' } } },
  ]);
  return expenses.length > 0 ? expenses[0].total : 0;
};

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;
