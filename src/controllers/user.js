const User = require('../models/user');

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createUser: async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
