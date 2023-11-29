// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/educonnect', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Middleware
app.use(bodyParser.json());

// Define Routes
app.get('/', (req, res) => {
  res.send('Welcome to EduConnect API');
});

app.use('/api/users', require('./routes/users'));
app.use('/api/content', require('./routes/content'));
app.use('/api/contributions', require('./routes/contributions'));

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
