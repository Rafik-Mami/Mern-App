import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Button, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {deletePlace} from '../../JS/Actions/actionsUser'
import EditPlace from '../EditPlace/EditPlace'
import './Myplace.css'
const Myplace = ({ place }) => {
    const name = useSelector(state => state.userReducer.user.name)
    const isAdmin = useSelector(state => state.userReducer.user.isAdmin)
const [edit, setEdit] = useState(false)
const toggleTrue=()=>{
    setEdit(!edit)
}
    return (
        <div className='editpage'> 
                                

          {!edit? <div className='myplace'><Card >
                <Card.Body  style={{borderRadius:'50px'}} >
                <Card.Img variant="top" src={place.img} style={{ width: '40rem' ,height:'30rem'}}/>

                    <Card.Title style={{margin:'50px'}}><h2>{place.title}</h2></Card.Title>
                    <Card.Title style={{margin:'50px'}}>{place.description}</Card.Title>
                  
                    <Card.Subtitle className="mb-2 text-muted" style={{marginBottom:'150px'}}>{place.address}</Card.Subtitle>
                    <Button  variant="danger" >delete</Button>

                    <Button  style={{marginTop:'50px'}} variant='primary'style={{ width: '70px',marginLeft:'100px'  }}  onClick={toggleTrue}>Edit</Button>
                </Card.Body>
            </Card></div>:    <div className='edit'> <EditPlace place={place}  /></div>
}
        </div>
    )
}


export default Myplace
