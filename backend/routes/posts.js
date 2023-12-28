const express = require('express')
const router = express.Router()
const {
    getAllPosts,
    getPost,
    createPost,
    deletePost,
    updatePost
} = require('../controllers/postController')


// get all posts
router.get('/', getAllPosts)

// get a single post
router.get('/:id', getPost)

// create a new post
router.post('/', createPost)

// delete a post
router.delete('/:id', deletePost)

// update a post
router.patch('/:id', updatePost)

module.exports = router