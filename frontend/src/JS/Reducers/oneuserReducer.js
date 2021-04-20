
import {
  GET_USER_FAIL,
  GET_USER_LOAD,
  GET_USER_SUCCESS
} from '../Constants/ActionsTypes'

const initialState = {
  user: {},
  isAuth: false,
  loadUser: false,
  errors: [],
};

const oneuserReducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case GET_USER_LOAD: return { ...state, loadUser: true }
    case GET_USER_FAIL: return { ...state, errors: payload, loadUser: false }
    case GET_USER_SUCCESS: return { ...state, user: payload, loadUser: false }


    default:
      return state;
  }
}

export default oneuserReducer