import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Navbar,Nav,Button} from 'react-bootstrap'
import {NavLink } from 'react-router-dom'
import {logout} from '../JS/Actions/actionsUser'
const Header = () => {
const dispatch = useDispatch()
  const isAuth = useSelector(state => state.userReducer.isAuth)
    return (
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home" className='title'>Our Tunisia</Navbar.Brand>
    <Nav className="mr-auto">
      <NavLink exact to='/' className="nav-link" activeClassName="selected-link">Home</NavLink>
      <NavLink to='/users' className="nav-link" activeClassName="selected-link">Users</NavLink>
      {isAuth ?<NavLink to='/profile' className="nav-link" activeClassName="selected-link">Profile</NavLink>:null}
      <NavLink to='/places' className="nav-link" activeClassName="selected-link">Places</NavLink>
      {isAuth? <NavLink to='/myplaces' className="nav-link" activeClassName="selected-link">MyPlaces</NavLink>:null}

            

      <div className='auth'>
      {isAuth ? <NavLink to='/' className="nav-link" activeClassName="selected-link"><Button variant="secondary" onClick={() => dispatch(logout())} >LogOut</Button></NavLink>:<><NavLink to='/signin' className="nav-link" activeClassName="selected-link"><Button variant="secondary">signIn</Button></NavLink>
      <NavLink to='/signup' className="nav-link" activeClassName="selected-link"><Button variant="danger">signUp</Button></NavLink></>}

      </div>
    </Nav>
    
  </Navbar>
    )
}

export default Header
