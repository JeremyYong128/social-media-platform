const Post = require('../models/postModel')
const mongoose = require('mongoose')

// get all posts
const getAllPosts = async (req, res) => {
    const posts = await Post.find({}).sort({ createdAt: -1 })
    res.status(200).json(posts)
}

// get a single post
const getPost = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such post' })
    }

    const post = await Post.findById(id)

    if (!post) {
        return res.status(404).json({ error: 'No such post' })
    }

    res.status(200).json(post)
}

// create a new post
const createPost = async (req, res) => {
    const { title, body, author, comments } = req.body

    try {
        const post = await Post.create({ title, body, author, comments })
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a post
const deletePost = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such post' })
    }

    const post = await Post.findByIdAndDelete(id)
    
    if (!post) {
        return res.status(400).json({ error: 'No such post' })
    }
    
    res.status(200).json(post)
}

// update a post
const updatePost = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such post' })
    }

    const post = await Post.findByIdAndUpdate(id, { ...req.body }, { new: true})

    if (!post) {
        return res.status(400).json({ error: 'No such post' })
    }

    res.status(200).json(post)
}

module.exports = {
    getAllPosts,
    getPost,
    createPost,
    deletePost,
    updatePost
}