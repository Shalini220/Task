// models/achievement.js
const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Achievement = mongoose.model('Achievement', achievementSchema);

module.exports = Achievement;

