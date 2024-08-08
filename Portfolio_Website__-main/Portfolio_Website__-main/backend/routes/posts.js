// backend/routes/posts.js
const express = require('express');
const router = express.Router();
const { addPost, getPosts, editPost } = require('../controllers/posts');

router.post('/add', addPost);
router.get('/', getPosts);
router.post('/edit', editPost);

module.exports = router;
