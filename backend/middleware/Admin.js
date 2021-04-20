
const User = require("../models/User")



const isAdmin=(req,res,next)=>{
console.log(req.headers)
    if(!req.isAdmin){
    return res.status(403).send('you are not admin ...')
    }
    next()
}
module.exports=isAdmin