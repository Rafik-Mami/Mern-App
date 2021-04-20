import React, { useEffect,useState } from 'react'
import {useSelector} from 'react-redux'
import {getOnePlace } from '../../JS/Actions/actionsUser'
import {useDispatch } from 'react-redux'
import {Form,Button} from 'react-bootstrap'
import {updatePlace} from '../../JS/Actions/actionsUser'
import './EditPlace.css'
const EditPlace = ({place,history}) => {
    const dispatch = useDispatch()
    const [newplace, setNewPlace] = useState({})
   /* useEffect(() => {
       dispatch(getOnePlace(place._id))
       console.log(place._id)
    }, [dispatch])*/
    const handleChange=(e)=>{
        setNewPlace({...newplace,[e.target.name]:e.target.value})
    }
    function goBack() {
      window.history.back();
    }
useEffect(() => {
  dispatch(getOnePlace(place._id))
}, [dispatch])
const Place = useSelector(state => state.PlaceRed.place.place)

    return (
        <div>
            <Form>
  <Form.Group controlId="formBasicText">
    <Form.Label style={{color:'white'}}>Title</Form.Label>
    <Form.Control type="text"  name="title" defaultValue={place.title}  onChange={handleChange} />
    
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label style={{color:'white'}}>description</Form.Label>
    <Form.Control type="text" defaultValue={place.description}  name="description"  onChange={handleChange}/>
    
  </Form.Group>

  <Form.Group controlId="formBasicText">
    <Form.Label style={{color:'white'}}>Adress</Form.Label>
    <Form.Control type="text"  name="address" defaultValue={place.address} onChange={handleChange} />
  </Form.Group>
 
  <Form.Group controlId="formBasicText">
              <Form.Label style={{ color: 'white' }}>Image of Place</Form.Label>
              <Form.Control type="text" defaultValue={place.img} name="img"  onChange={handleChange} />
            </Form.Group>
  <div className='upload'>
  
</div>
 <div className='editBtn'>
 <Button style={{marginTop:'50px'}} variant="primary" type="button" onClick={()=>{dispatch(updatePlace(Place._id,newplace));goBack()}} >
  Submit
  </Button>
 </div>
  
   
</Form>
            
        </div>
    )
}

export default EditPlace
