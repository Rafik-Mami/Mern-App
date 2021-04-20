
const Comment=require('../models/Comments')
const addComment = async (req, res) => {
    try {

        const { comment,place_id} = req.body

        const newComment = new Comment({ comment,place_id})
        await newComment.save()
        res.status(200).send({ msg: "added comment successfully",newComment })


    } catch (error) {
        res.status(400).send({ msg: "error occured in adding comment", error })
    }

}

const getAllComment = async (req, res) => {
    try {
      
        const listComment = await Comment.find()//.populate('user')
        res.status(200).send({ msg: "get places successfully", listComment })

    } catch (error) {
        res.status(400).send({ msg: "can not get places for this user", error })
    }
}

const deleteComment=async(req,res)=>{
    try {

        const {_id}=req.params
        const commentTodelete=await Comment.findOneAndRemove({_id})
    
        res.status(200).send({msg:"place deleted",commentTodelete})
        
        
    } catch (error) {
        res.status(400).send({msg:"fail to delete place",error})
    }
}

const editComment=async(req,res)=>{
    const {comment,place_id } = req.body
    const {_id}=req.params

try {


    const commentToEdit=await Place.updateOne({_id},{$set:{...req.body}})
    if(!commentToEdit.nModified){

        res.status(200).send({msg:"comment already updated ",commentToEdit})
    }
     res.status(200).send({msg:"comment  updated  successfully",commentToEdit})

    
} catch (error) {
    res.status(400).send({msg:"updated failed",error})
}



}



module.exports={getAllComment,addComment,deleteComment,editComment}