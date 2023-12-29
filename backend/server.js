require('dotenv').config()
const express = require('express')
const postRoutes = require('./routes/posts')
const mongoose = require('mongoose')
const cors = require('cors')

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors({
    origin: '*'
}))
app.use((req, routes, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/posts', postRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to database and listening on port 4000')
        })
    })
    .catch((error) => {
        console.log(error)
    })