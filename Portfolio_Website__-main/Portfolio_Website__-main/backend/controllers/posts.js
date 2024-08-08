// backend/controllers/posts.js
const Post = require('../models/Post');

exports.addPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newPost = new Post({ title, content });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.editPost = async (req, res) => {
    try {
        const { id, title, content } = req.body;
        const updatedPost = await Post.findByIdAndUpdate(id, { title, content }, { new: true });
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
