import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Button, Card } from 'react-bootstrap'
import { addPlace } from '../../JS/Actions/actionsUser'
import './Profile.css'
const Profile = ({ history }) => {
  const user = useSelector(state => state.userReducer.user)
  const [isNew, setIsNew] = useState(false)
  const ToggleTrue = () => {
    setIsNew(!isNew)
  }
  const dispatch = useDispatch()
  

  const [image, setImage] = useState('')
  const onChangeFile=e=>{
    setImage({ ...place, [e.target.name]: e.target.file })
  }
  const [place, setPlace] = useState({ user_id: user._id, user: user.name,image})
  const handleChange = (e) => {
    setPlace({ ...place, [e.target.name]: e.target.value })
  }
  return (
    <div className='profil-header'>
      {!isNew ?

        <div className='profil'>
          <img src={user.img} />
          <label type="text" />
          <div className='info'>
            <div className='name'>
              <h2>Full Name</h2>

              <h3>{user.name}</h3>
            </div>
            <div className='email'>
              <h2>Email</h2>

              <h3>{user.email}</h3>
            </div>
            <div className='name'>
              <h2>Phone</h2>
              <h3>{user.phone}</h3>
            </div>
          </div>
          <div className='boutton'>
            <Button className='btn1' onClick={ToggleTrue} variant="primary">Add New Place</Button>

          </div>

        </div>





        : <div className='newplace'>
          <Form>
            <Form.Group controlId="formBasicText">
              <Form.Label style={{ color: 'white' }}>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title .." name="title" onChange={handleChange} />

            </Form.Group>
            <Form.Group controlId="formBasicText">
              <Form.Label style={{ color: 'white' }}>description</Form.Label>
              <Form.Control type="" placeholder="Enter description .." name="description" onChange={handleChange} />

            </Form.Group>

            <Form.Group controlId="formBasicText">
              <Form.Label style={{ color: 'white' }}>Adress</Form.Label>
              <Form.Control type="text" placeholder="adress .." name="address" onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicText">
              <Form.Label style={{ color: 'white' }}>Image of Place</Form.Label>
              <Form.Control type="text" placeholder="image url .." name="img" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicText">
              <Form.Label style={{ color: 'white' }}>Rating</Form.Label>
              <Form.Control type="number" placeholder="Rating .." max='5' name="rating" onChange={handleChange} />
            </Form.Group>
            {/*<form encType='multipart/form-data'
            >

              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                name="image"
                onChange={onChangeFile}
              />
      </form>*/}

            <Button style={{ marginRight: '10px', width: '80px' }} onClick={ToggleTrue}>back</Button>
            <Button variant="primary" type="button" onClick={() => dispatch(addPlace(place, history))} >
              Submit
  </Button>
          </Form>

        </div>}

    </div>
  )
}

export default Profile
