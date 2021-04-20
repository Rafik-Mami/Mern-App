const mongoose = require('mongoose')
const Schema = mongoose.Schema;









const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    img:{ type: String, required: true },
    isAdmin: false,
    
   
    

   
})

module.exports = User = mongoose.model('user', userSchema)
