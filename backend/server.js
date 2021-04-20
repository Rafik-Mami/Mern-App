const express = require('express')
const mongoose = require('mongoose')
const app = express()
const connectDB = require('./config/connectDB')

require('dotenv').config()
connectDB()
var distDir = __dirname + "/dist/";

app.use(express.static(distDir));
app.use(express.json())

app.use('/api/user',require('./routes/user'))
app.use('/api/places/',require('./routes/place'))
app.use('/api/comment',require('./routes/comment'))
const PORT = process.env.PORT

app.listen(PORT, (error) => {
    error ? console.error('can not connected to server ' + error) : console.log('server running on port' + PORT)
})