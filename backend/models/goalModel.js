const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  goalName: { type: String, required: true },
  targetAmount: { type: Number, required: true },
  deadline: { type: Date, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
