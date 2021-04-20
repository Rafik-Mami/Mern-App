
import axios from 'axios'
import User from '../../Components/User/User'
import {GET_USERS_LOAD,GET_USERS_SUCCESS,GET_USERS_FAIL} from '../Constants/ActionsTypes'

export const getUsers = () => async (dispatch) => {
    dispatch({ type: GET_USERS_LOAD })
    try {
        const res = await axios.get("/api/user/")
        dispatch({
            type: GET_USERS_SUCCESS,
            payload: res.data.UserList
        })
    } catch (error) {
        dispatch({
            type: GET_USERS_FAIL,
            payload: error
        })
        console.log(error)
    }
}

export const deleteUser=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/user/${id}`)
        dispatch(getUsers())
    } catch (error) {
        console.log(error)

    }
}