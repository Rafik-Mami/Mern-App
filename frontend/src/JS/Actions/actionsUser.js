
import {
  CURRENT_USER,
  FAIL_USER,
  GET_USER_FAIL,
    GET_USER_LOAD,
    GET_USER_SUCCESS,
  GET_PLACE,
  LOAD_USER,
  LOGIN_USER,
  SIGNUP_USER,
  LOGOUT_USER,
  GET_COMMENT_FAIL,
    GET_COMMENT_LOAD,
    GET_COMMENT_SUCCESS,
  VIDE_ERRORS,
  GET_PLACES_LOAD,
  GET_PLACES_SUCCESS,
  GET_PLACES_FAIL,
  ADD_PLACE,LOAD_PLACE,FAIL_PLACE
} from "../Constants/ActionsTypes";

import axios from "axios";

export const signup = (newUser, history) => async (dispatch) => {
 dispatch({ type: LOAD_USER });
  console.log(history);
  try {
    const result = await axios.post("/api/user/signup", newUser);

    dispatch({ type: SIGNUP_USER, payload: result.data }); //msg , token , user
history.push("/profile");
  } catch (error) {
    console.log(error.response.data.errorrs);
    // error.response.data.errors.map((el) => alert(el.msg));
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const signin = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });

  try {
    const result = await axios.post("/api/user/signin", user);
    dispatch({ type: LOGIN_USER, payload: result.data });
    history.push("/Profile");
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const currentUser = () => async (dispatch) => {
  try {
    const options = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    const result = await axios.get("/api/user/current", options);
    dispatch({ type: CURRENT_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const videErrors = () => {
  return {
    type: VIDE_ERRORS,
  };
};



export const addPlace=(newplace,history)=>async(dispatch)=>{
  dispatch({ type: LOAD_PLACE });

  
  try {
    const result = await axios.post("/api/places/",newplace);
    dispatch({ type: ADD_PLACE, payload: result.data });
    history.push("/places");

  } catch (error) {
    dispatch({ type: FAIL_PLACE, payload: error.response.errors });
  }
};

export const getPlaces=()=>async(dispatch)=>{
  dispatch({ type: GET_PLACES_LOAD });

  try {
    const result = await axios.get("/api/places/");
    dispatch({ type: GET_PLACES_SUCCESS, payload: result.data });
    
  } catch (error) {
    dispatch({ type: GET_PLACES_FAIL, payload: error.response.data.errors });
  }
};

export const updatePlace=(_id,newplace,history)=>async(dispatch)=>{
  

  try {
    const result = await axios.put(`/api/places/${_id}`,newplace);
    //dispatch(getPlaces());
    history.push("/profile");
  } catch (error) {
    console.log(error)
  }
};
export const deletePlace=(id)=>async(dispatch)=>{
  try {
      await axios.delete(`/api/places/${id}`)
      dispatch(getPlaces())
  } catch (error) {
      console.log(error)

  }
}
 
export const getOnePlace=(id)=>async(dispatch)=>{
  try {
    const result=await axios.get(`/api/places/${id}`)
    dispatch({type:GET_PLACE,payload:result.data})
    
  } catch (error) {
    console.log(error)

  }
}


export const addComment=(newcomment)=>async(dispatch)=>{
 

  try {
    const result = await axios.post("/api/comment/",newcomment);
    dispatch(getComment())

  } catch (error) {
console.log(error)  }
};

export const getComment=()=>async(dispatch)=>{
  dispatch({ type: GET_COMMENT_LOAD });

  try {
    const result = await axios.get("/api/comment/");
    dispatch({ type: GET_COMMENT_SUCCESS, payload: result.data });
    
  } catch (error) {
    dispatch({ type: GET_COMMENT_FAIL, payload: error.response.data.errors });
  }
};


export const deleteComment=(id)=>async(dispatch)=>{
  try {
      await axios.delete(`/api/comment/${id}`)
      dispatch(getComment())
  } catch (error) {
      console.log(error)

  }
}


export const updateComment=(_id,newcomment,history)=>async(dispatch)=>{
  

  try {
    const result = await axios.put(`/api/comment/${_id}`,newcomment);
    //dispatch(getPlaces());
    history.push("/profile");
  } catch (error) {
    console.log(error)
  }
};


export const getOneUser=(id)=>async(dispatch)=>{
  dispatch({type: GET_USER_LOAD})

  try {
    const result=await axios.get(`/api/user/${id}`)
    dispatch({type:GET_USER_SUCCESS,payload:result.data})
    
  } catch (error) { 
    dispatch({type:GET_USER_FAIL,payload:error})

  }
}