import {GET_PLACE} from '../Constants/ActionsTypes'
const initState={
    place:{},
    load:false,
    errors:[]
}

const PlaceRed=(state=initState,{type,payload})=>{
switch (type) {
    case GET_PLACE: return {...state,place:payload}
        
      

    default:
        return state
}
}
export default PlaceRed