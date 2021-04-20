import React,{useState} from 'react'
import {Form ,Button } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router'
import {signin} from '../../JS/Actions/actionsUser'
import './Form.css'
const FormSignIn = () => {
  const history=useHistory()
  const dispatch = useDispatch()
  const [user, setUser] = useState({})
  
  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
}
    return (
        <div className='signin'>
        <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label style={{color:'white'}}>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email"  onChange={handleChange}/>
         
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label style={{color:'white'}}>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password"  onChange={handleChange} />
        </Form.Group>
       
        <Button variant="primary" type="button" onClick={()=>dispatch(signin(user,history))}>
          Submit
        </Button>
      </Form>
      </div>
    )
}

export default FormSignIn
