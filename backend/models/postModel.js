const mongoose = require('mongoose')
const Comment = require('./commentModel')

const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    comments: {
        type: [Comment.schema],
        required: true,
        default: []
    }
}, { timestamps: true })

module.exports = mongoose.model('Post', postSchema)