import React ,{useState,useEffect} from 'react'
import {Button,Form} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import './FormSignUp.css'
import {signup,videErrors} from '../../JS/Actions/actionsUser'
const FormSignUp = ({history}) => {
    const [newuser, setNewuser] = useState({})
    const dispatch = useDispatch()
    useEffect(() => {
      return () => {
        dispatch(videErrors());
      };
    }, []);
    const errors = useSelector((state) => state.userReducer.errors);

    const handleChange=(e)=>{
        setNewuser({...newuser,[e.target.name]:e.target.value})
    }

    return (
        <div className='signup'>
            <Form>
            <Form.Group controlId="formBasicUsername">
          <Form.Label style={{color:'white'}}>Full name</Form.Label>
          <Form.Control style={{borderRadius:'10px'}} type="text" placeholder="Enter Fullname" name='name' onChange={handleChange}/>
         
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label style={{color:'white'}}>Email address</Form.Label>
          <Form.Control style={{borderRadius:'10px'}} type="email" placeholder="Enter email" name='email' onChange={handleChange} />
          
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label style={{color:'white'}}>Password</Form.Label>
          <Form.Control style={{borderRadius:'10px'}} type="password" placeholder="Password" name="password" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label style={{color:'white'}}>phone</Form.Label>
          <Form.Control style={{borderRadius:'10px'}} type="number" placeholder="enter phone" name='phone' onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="formBasicUsername">
          <Form.Label style={{color:'white'}}>Image</Form.Label>
          <Form.Control style={{borderRadius:'10px'}} type="text" placeholder="Enter image URL" name='img' onChange={handleChange}/>
         
        </Form.Group>
       
        <Button variant="primary" type="button" onClick={()=>dispatch(signup(newuser,history))}>
          Submit
        </Button>
      </Form>
        </div>
    )
}

export default FormSignUp
