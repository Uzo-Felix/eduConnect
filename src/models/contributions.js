const mongoose = require('mongoose');

const UserContentContribution = mongoose.model('UserContentContribution', {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: { type: mongoose.Schema.Types.ObjectId, ref: 'Content' },
    contributedAt: { type: Date, default: Date.now }
  });

  module.exports = UserContentContribution;