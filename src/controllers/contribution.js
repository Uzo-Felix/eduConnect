const Contribution = require('../models/contribution');

module.exports = {
  getAllContributions: async (req, res) => {
    try {
      const contributions = await Contribution.find();
      res.json(contributions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createContribution: async (req, res) => {
    try {
      const newContribution = new Contribution(req.body);
      await newContribution.save();
      res.json(newContribution);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
