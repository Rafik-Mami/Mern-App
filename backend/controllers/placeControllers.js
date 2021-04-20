const Place = require('../models/Place')
//get all place for uid
const getAllPlaces = async (req, res) => {
    try {
      
        const listPlaces = await Place.find()
        res.status(200).send({ msg: "get places successfully", listPlaces })

    } catch (error) {
        res.status(400).send({ msg: "can not get places for this user", error })
    }
}
//get specific places for pid

const getOnePlace = async (req, res) => {
    try {
        const { _id } = req.params
        const place = await Place.findById({ _id })
       

            res.status(200).send({ msg: "get place successfully", place })
        
    } catch (error) {
        res.status(400).send({ msg: "can not get place for this id", error })
    }
}


//create new place
const createPlace = async (req, res) => {
    try {

        const { title, description, address,img,user_id,user,rating} = req.body
        
        
        const newPlace = new Place({ title, description, address,img,user_id,user,rating/*,image:req.file.originalname*/})

       
        await newPlace.save()
        res.status(200).send({ msg: "added place successfully",newPlace })


    } catch (error) {
        res.status(400).send({ msg: "error occured in adding place", error })
    }

}
//update place
const editPlace=async(req,res)=>{
    //const { title, description, address } = req.body
    const {_id}=req.params

try {


    const placeToEdit=await Place.updateOne({_id},{$set:{...req.body}})
    if(!placeToEdit.nModified){

        res.status(200).send({msg:"place already updated ",placeToEdit})
    }
     res.status(200).send({msg:"place  updated  successfully",placeToEdit})

    
} catch (error) {
    res.status(400).send({msg:"updated failed",error})
}



}
//delete place 

const deletePlace=async(req,res)=>{
    try {

        const {_id}=req.params
        const placeTodelete=await Place.findOneAndRemove({_id})
    
        res.status(200).send({msg:"place deleted",placeTodelete})
        
        
    } catch (error) {
        res.status(400).send({msg:"fail to delete place",error})
    }
}



module.exports = { getAllPlaces, getOnePlace,createPlace,editPlace ,deletePlace}