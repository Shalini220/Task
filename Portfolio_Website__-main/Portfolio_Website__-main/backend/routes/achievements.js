// routes/achievements.js
const express = require('express');
const router = express.Router();
const achievementController = require('../controllers/achievement');

// Route to get all achievements
router.get('/', achievementController.getAllAchievements);

// Route to add a new achievement
router.post('/add', achievementController.addAchievement);

// Other routes (update, delete) would go here...

module.exports = router;

