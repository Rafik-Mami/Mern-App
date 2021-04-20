const mongoose = require('mongoose')

var placeSchema = new mongoose.Schema({
    title: {type:String,required:true},
    description: {type:String,required:true},
    address:{type:String,required:true},
    user:{type:String,required:true},
    user_id:{type:String},
    comments:[String],

    //image:{type:String},
    img: {
        type: String
    },
    rating:{type:Number}
});
 const User=require('./User')
 
module.exports =Place= new mongoose.model('place', placeSchema);