import { GET_USERS_LOAD, GET_USERS_SUCCESS, GET_USERS_FAIL } from '../Constants/ActionsTypes'


const initialState = {

    users: [],
    load: false,
    errors: []
}
const usersReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case GET_USERS_LOAD: return { ...state, load: true }
        case GET_USERS_SUCCESS: return { ...state, load: false, users: payload }
        case GET_USERS_FAIL: return { ...state, load: false, errors: payload }



        default:
            return state
    }

}
export default usersReducer