//require mongoose
const express=require('express')
const router=express.Router()
const {signUp,signIn}=require('../controllers/authControllers')
const {getUsers,deleteUsers,getOneUser}=require('../controllers/userControllers')
const isAuth = require('../middleware/auth')

const {registerValidation,validation,signinValidation}=require('../middleware/user')
//get all users list
router.get('/',getUsers)
//signUp
router.get('/:_id',getOneUser)
router.post('/signup',registerValidation(),validation,signUp)
//signIn
router.post('/signin',signinValidation(),validation, signIn)
//current user
router.get('/current',isAuth,(req,res)=>{
    res.send(req.user);
})
router.delete('/:_id',deleteUsers)
module.exports=router