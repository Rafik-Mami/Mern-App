const express=require('express')
const router=express.Router()
const multer=require('multer')


const storage=multer.diskStorage({
destination:(req,file,cb)=>{
    cb(null,'./frontend/public/uploads')
},
filename:(req,file,cb)=>{
    cb(null,file.originalname)
}
})

const upload=multer({storage:storage})

const { getAllPlaces, getOnePlace,createPlace,editPlace ,deletePlace}=require('../controllers/placeControllers')

//list of all places for a given user id (uid)
router.get('/' ,getAllPlaces)
//get specific place by place id (pid)
router.get('/:_id' ,getOnePlace)
//create new place
router.post('/' ,createPlace)
//update place by place id (pid)
router.put('/:_id' ,editPlace)
//delete place by  place id (pid)
router.delete('/:_id',deletePlace)
module.exports=router