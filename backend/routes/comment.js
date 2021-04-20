const express=require('express')
const router=express.Router()

const {getAllComment,deleteComment,addComment,editComment}=require('../controllers/commentController')
//add comment 

router.post('/',addComment)
//get comment
router.get('/',getAllComment)
router.delete('/:_id',deleteComment)
//update comment
router.put('/:_id',editComment)


module.exports=router