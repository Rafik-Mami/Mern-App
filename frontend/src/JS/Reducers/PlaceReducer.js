import {
    GET_PLACES_LOAD,
    GET_PLACES_FAIL,
    ADD_PLACE,
    GET_PLACES_SUCCESS
} from '../Constants/ActionsTypes'

const initState = {
    places: [],
    load: false,
    errors: []
}
const placeReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_PLACES_LOAD: return { ...state, load: true }
        case GET_PLACES_FAIL: return { ...state, errors: payload }
        case GET_PLACES_SUCCESS: return { ...state, places: payload }

        default:
            return state
    }
}

export default placeReducer