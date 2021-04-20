import React, { useState } from 'react'
import './User.css'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteUser } from '../../JS/Actions/Users'
import { getPlaces } from '../../JS/Actions/actionsUser'


const User = ({ user }) => {
    const isAdmin = useSelector(state => state.userReducer.user.isAdmin)
    const isAuth = useSelector(state => state.userReducer.isAuth)
    const [place, setPlace] = useState({})
    const [isNew, setIsNew] = useState(false)



    const dispatch = useDispatch()
    return (
       
            <Card style={{borderRadius:'50px',margin:'20px', width: '40rem', height: '32rem',backgroundColor:'rgba(0,0,0,0.5)' }} >
                <Card.Body>
                    <img src={user.img} />
                   <Card.Title><div className='name'>{user.name}</div></Card.Title> 
                    <Card.Subtitle className="mb-2 text-muted"><h5>{user.email}</h5></Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted"><h5>{user.phone}</h5></Card.Subtitle>

                    {isAdmin ? <Button variant="danger" onClick={() => dispatch(deleteUser(user._id))}>delete user </Button> : null}

                </Card.Body>
            </Card>
        


    )
}

export default User







