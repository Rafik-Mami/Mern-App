const User = require("../models/User")

const getUsers =async (req,res)=>{
    try {
        const UserList=await User.find()
        res.status(200).send({ msg: 'list of user', UserList })
    } catch (error) {
        res.send(error)
    }
}
//get one user

const getOneUser = async (req, res) => {
    try {
        const { _id } = req.params
        const user = await User.findById({ _id })
       

            res.status(200).send({ msg: "get place successfully", user })
        
    } catch (error) {
        res.status(400).send({ msg: "can not get place for this id", error })
    }
}



const deleteUsers =async (req,res)=>{
    const {_id}=req.params
    try {
        const userToDelete=await User.findOneAndRemove({_id})
        res.status(200).send({ msg: 'user deleted', userToDelete })
    } catch (error) {
        res.send(error)
    }
}


module.exports={getUsers,deleteUsers,getOneUser}