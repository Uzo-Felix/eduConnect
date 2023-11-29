// controllers/content.js

const Content = require('../models/content');

module.exports = {
  getAllContent: async (req, res) => {
    try {
      const content = await Content.find();
      res.json(content);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createContent: async (req, res) => {
    try {
      const newContent = new Content(req.body);
      await newContent.save();
      res.json(newContent);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
