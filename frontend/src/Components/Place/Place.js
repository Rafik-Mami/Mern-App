import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Card,Button} from 'react-bootstrap'
import './Place.css'
import BeautyStars from 'beauty-stars';

//import { Rate } from 'antd';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

import {Link} from 'react-router-dom'
import {deletePlace,getOnePlace,getOneUser} from '../../JS/Actions/actionsUser'
const Place = ({ place }) => {
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

    const name = useSelector(state => state.userReducer.user.name)
    const isAdmin = useSelector(state => state.userReducer.user.isAdmin)
    //const comments = useSelector(state => state.PlaceReducer.ListPlaces.comments)
   // const [comments,setComments] = useState([])
const dispatch = useDispatch()
    return (
        <div className='place'>
            <Card style={{ width: '60rem',height:'52rem' }}  >
            <Card.Img variant="top" src={place.img} style={{ width: '58rem' ,height:'30rem'}}/>
           <div className='rating'> <BeautyStars
        value={place.rating}
       disabled
      />       
               </div>       <Card.Body >
                    <Card.Title><h2>{place.title}</h2></Card.Title>
                    <Card.Title>{place.description}</Card.Title>

                    <Card.Subtitle className="mb-2 text-muted">{place.address}</Card.Subtitle>
                    <div className='grp_btn'>
                      {isAdmin? <Button variant='danger' onClick={()=>dispatch(deletePlace(place._id))}> delete place </Button>:null}
               <Link to={`/creator`}> <Button variant="secondary" onClick={()=>dispatch(getOneUser(place.user_id))}>added by</Button></Link>
               <Link to={`/comments`} ><Button  onClick={()=>dispatch(getOnePlace(place._id))}>comments</Button></Link>
               </div>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Place
