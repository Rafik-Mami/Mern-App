
      import {
        CURRENT_USER,
        FAIL_USER,
        LOAD_USER,
        LOGIN_USER,
        SIGNUP_USER,
        LOGOUT_USER,
        VIDE_ERRORS
      }  
      from "../Constants/ActionsTypes";
      
      const initialState = {
        user:{},
        isAuth: false,
        loadUser: false,
        errors: [],
      };
      
      const userReducer = (state = initialState, { type, payload }) => {
        switch (type) {
         case LOAD_USER:
            return { ...state, loadUser: true };
          case SIGNUP_USER:
            localStorage.setItem("token", payload.token);
            return {
              ...state,
              loadUser: false,
              user: payload.user,
              isAuth: true,
              errors: [],
            };
          case LOGIN_USER:
            localStorage.setItem("token", payload.token);
            return {
              ...state,
              loadUser: false,
              user: payload.user,
              isAuth: true,
              errors: [],
            };
          case CURRENT_USER:
            return {
              ...state,
              loadUser: false,
              user: payload,
              isAuth: true,
              errors: [],
            };
          case FAIL_USER:
            return { ...state, loadUser: false, errors: payload };
          case LOGOUT_USER:
            localStorage.removeItem("token");
            return {
              ...state,
              loadUser: false,
              errors: [],
              user: {},
              isAuth: false,
            };
          case VIDE_ERRORS:
            return { ...state, errors: [] };
          default:
            return state;
        }
      };
      export default userReducer;
      