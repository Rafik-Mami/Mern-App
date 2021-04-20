import { GET_COMMENT_FAIL,
    GET_COMMENT_LOAD,
    GET_COMMENT_SUCCESS} from '../Constants/ActionsTypes'

 const initState={
comment:[],
errors:[],

loadComment:false


 }

 const commentReducer=(state=initState,{type,payload})=>{
     switch (type) {
        case GET_COMMENT_LOAD:return {...state,loadComment:true}
        case GET_COMMENT_SUCCESS:return {...state,loadComment:false,comment:payload}
        case GET_COMMENT_FAIL:return {...state,loadComment:false,errors:payload}
        default:return state
     }
 }
 export default commentReducer