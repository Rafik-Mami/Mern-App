import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'
const Creator = () => {
    const User = useSelector(state => state.oneuserReducer.user.user)
    useEffect(() => {
        console.log(User)
    }, [])
    return (
        <div className='user'>

            <Card style={{ marginLeft:'400px', width: '40rem', height: '30rem', backgroundColor: 'rgba(0,0,0,0.5)' }} >
                <Card.Body>
                    <img src={User.img} />
                    <Card.Title ><h2>{User.name}</h2></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"><h5>{User.email}</h5></Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted"><h5>{User.phone}</h5></Card.Subtitle>


                </Card.Body>
            </Card>



        </div>
    )
}

export default Creator
