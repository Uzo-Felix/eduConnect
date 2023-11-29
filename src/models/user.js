const mongoose = require('mongoose');

const User = mongoose.model('User', {
    username: String,
    email: { type: String, unique: true },
    passwordHash: String,
    preferences: Object,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

module.exports = User;