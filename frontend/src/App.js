import { useEffect } from 'react'
import Home from './Components/Home/Home'
import UserList from './Components/UserList/UserList';
import FormSignIn from './Components/FormSignIn/FormSignIn';
import FormSignUp from './Components/FormSignUp/FormSignUp'
import Navbar from './Components/Navbar.js'
import Profile from './Components/Profile/Profile'
import Errors from './Components/Errors/Errors'
import PlaceList from './Components/PlaceList/PlaceList'
import MyplacesList from './Components/Myplaces/MyplacesList'
import Comments from './Components/Comments/Comments'
import Creator from './Components/Creator/Creator'

import { Switch, Route } from 'react-router-dom'
import { currentUser } from './JS/Actions/actionsUser'
import { useDispatch } from 'react-redux'
import PrivateRoute from './router/PrivateRoute';

import './App.css';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        /<Route exact path='/' component={Home} />
        <Route exact path='/users' component={UserList} />
        <Route path='/signin' component={FormSignIn} />
        <Route path='/signup' component={FormSignUp} />
        <PrivateRoute path='/profile' component={Profile} />
        <Route path='/places' component={PlaceList} />
        <Route path='/myplaces' component={MyplacesList} />
        <Route path='/comments' component={Comments} />
        <Route path='/creator' component={Creator} />
        <Route path='/*' component={Errors} />
      </Switch>
    </div>
  );
}

export default App;
