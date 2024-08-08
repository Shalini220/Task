// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const achievementRoutes = require('./routes/achievements');

const app = express();

// Middleware
app.use(bodyParser.json());

// Use the routes
app.use('/api/achievements', achievementRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Start the server
app.listen(5000, () => console.log('Server running on port 5000'));

