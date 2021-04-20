const User = require('../models/User')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const isAdmin = require('../middleware/Admin')
const signUp = async (req, res) => {
  try {
    const { name, email, password ,phone,img } = req.body


    const findUser = await User.findOne({ email })

    if (findUser) {
      return res.status(400).send({ errors: [{ msg: "email should be unique" }] })
    }

    const saltRounds = 10;
    const hashedpassword = bcrypt.hashSync(password, saltRounds)
    const newUser = new User({ name, email, password ,phone,img})
    newUser.password = hashedpassword
    await newUser.save()
    const token = jwt.sign({
      id: newUser._id,isAdmin:this.isAdmin
    }, process.env.SECRET, { expiresIn: 60 * 60 });
    res.status(200).send({ msg: " new user added successfuly", user: newUser, token })
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "request failed" }] })
  }

}

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email })
    if (!findUser) {
      return res.status(400).send({ errors: [{ msg: "bad credential1" }] })
    }
const hashedPassword=findUser.password
    let result = await bcrypt.compare(password,hashedPassword )
    if (!result) {
      return res.status(400).send({ errors: [{ msg: "bad credential2" }] })
    }

    const token = jwt.sign({
      id: findUser._id,isAdmin:this.isAdmin
    }, process.env.SECRET, { expiresIn: 60 * 60 });
    res.status(200).send({ msg: " login successfuly", user: findUser, token })
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "request failed" }] })

  }
}

module.exports = { signUp, signIn }