const express = require('express')
const mongoose = require('mongoose')
const app = express()
const connectDB = require('./config/connectDB')
const path=require('path')
const bodyParser =require('body-parser')
require('dotenv').config()

app.use(bodyParser.json())
connectDB()

app.use(express.json())

app.use('/api/user',require('./routes/user'))
app.use('/api/places/',require('./routes/place'))
app.use('/api/comment',require('./routes/comment'))

if(process.env.NODE_ENV=='production'){
    app.use(express.static('frontend/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
}
const PORT = process.env.PORT
app.listen(PORT, (error) => {
    error ? console.error('can not connected to server ' + error) : console.log('server running on port' + PORT)
})