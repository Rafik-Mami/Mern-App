import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Form,Button} from 'react-bootstrap'
import {addComment,getComment} from '../../JS/Actions/actionsUser'
import Commentaire from './commentaire'
const Comments = ({history}) => {
    const dispatch = useDispatch()

   
     
    const Placenow =useSelector(state => state.PlaceRed.place._id)
    console.log(useSelector(state => state.PlaceRed.place._id))
    const [newcomment,setNewcomment] = useState({place_id:useSelector(state => state.PlaceRed.place._id)})
const handleChange=(e)=>{
    setNewcomment({...newcomment,[e.target.name]:e.target.value})
}

const COMMENTS = useSelector(state => state.commentReducer.comment)
console.log(COMMENTS[2])
    return (
        <div className='comment_page'>
            <Form.Group controlId="formBasicText">
                <div className='title'>

    <Form.Label>Comments</Form.Label>
                </div>
    <Form.Control type="text" placeholder="comment .." name="comment" onChange={handleChange} />
  </Form.Group>
 

  <Button variant="primary" type="button" onClick={()=>dispatch(addComment(newcomment))} >
    Add comment
  </Button>
  {
    COMMENTS.filter(comm=>comm.place_id==Placenow._id).map(comm=>
    <Commentaire comm={comm} key={comm._id} />)
}
        </div>
    )
}

export default Comments
