import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {getUsers} from '../../JS/Actions/Users'
import User from '../User/User'
import {Form} from 'react-bootstrap'
import './UserList.css'
const UserList = () => {

const users= useSelector(state => state.usersReducer.users)
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getUsers())
    }, [dispatch])
const [input, setInput] = useState("")
    return (
        <div>
          
             <Form.Control type="text" placeholder="Enter user name ..."
        className="inputFilter"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
     <div className='list_user'>
         { users.filter(user =>
          user.name.toUpperCase().includes(input.toUpperCase())).map(user=>
              <User user={user} key={user._id} />
          )}
        </div>
        </div>
    )
}

export default UserList
