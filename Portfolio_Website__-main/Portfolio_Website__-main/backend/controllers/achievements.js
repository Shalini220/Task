// controllers/achievement.js
const Achievement = require('../models/Achievement');

// Get all achievements
exports.getAllAchievements = async (req, res) => {
    try {
        const achievements = await Achievement.find();
        res.json(achievements);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new achievement
exports.addAchievement = async (req, res) => {
    const { title, description } = req.body;

    const newAchievement = new Achievement({
        title,
        description
    });

    try {
        const savedAchievement = await newAchievement.save();
        res.status(201).json(savedAchievement);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Other CRUD operations (update, delete) would go here...


