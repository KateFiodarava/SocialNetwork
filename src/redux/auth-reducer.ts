import {
  ActionsTypes, authActionType, totalCountType
} from "./store";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";


const SET_USER_DATA = 'SET_USER_DATA';

export type authPropsType = {
  userId: null
  email:null
  login: null
  isAuth: boolean
}

const initialState: authPropsType = {
  userId: null,
  email:null,
  login: null,
  isAuth: false
}

const authReducer = (state: authPropsType = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
       ...action.data,
        isAuth:true
      }
    default:
      return state
  }
}

const setAuthUserData = (userId: null,email:null,login:null): authActionType => ({
  type: SET_USER_DATA,
  data: {userId,email,login}
})
export const getAuthUserData = () => (dispatch:Dispatch) => {
  authAPI.me()
    .then(response => {
      if  (response.data.resultCode === 0) {
        let {id,email,login} = response.data.data;
        dispatch(setAuthUserData (id,email,login));
      }
    })
}

export default authReducer