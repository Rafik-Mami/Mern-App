const mongoose=require('mongoose')

const commentSchema=new mongoose.Schema({
  comment:String,
  place_id:String

})

module.exports=Comment=mongoose.model('comment',commentSchema)