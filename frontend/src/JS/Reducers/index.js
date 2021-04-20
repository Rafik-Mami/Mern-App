import { combineReducers } from 'redux'
import userReducer from './UserReducer'
import usersReducer from './UsersReducer'
import placeReducer from './PlaceReducer'
import PlaceRed from './Place'
import commentReducer from './Comment'
import oneuserReducer from './oneuserReducer'
const rootReducer = combineReducers({
    userReducer,
    usersReducer,placeReducer,PlaceRed,commentReducer,oneuserReducer
})

export default rootReducer