const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
}, { timestamps: false })

module.exports = mongoose.model('Comment', commentSchema)