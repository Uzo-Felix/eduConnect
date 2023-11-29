const mongoose = require('mongoose'); 

const Content = mongoose.model('Content', {
    title: String,
    description: String,
    author: String,
    url: String,
    tags: Object,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

module.exports = Content;