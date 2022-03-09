import {
  ActionsTypes, authActionType, totalCountType
} from "./store";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'SET_USER_DATA';

export type authPropsType = {
  userId: null
  email: null
  login: null
  isAuth: boolean
}

const initialState: authPropsType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state: authPropsType = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

const setAuthUserData = (userId: null, email: null, login: null,isAuth:boolean): authActionType => ({
  type: SET_USER_DATA,
  payload: {userId, email, login, isAuth}
})
export const getAuthUserData = () => (dispatch: Dispatch) => {
  authAPI.me()
    .then(response => {
      if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login,true));
      }
    })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
  authAPI.login(email, password, rememberMe)
    .then(response => {
      if (response.data.resultCode === 0) {
        // @ts-ignore
        dispatch(getAuthUserData())
      } else {
       let message=response.data.messages.length > 0 ? response.data.messages:'Common error'
        dispatch(stopSubmit('email',{_error:message}));
      }
    })
}

export const logout = () => (dispatch: Dispatch) => {
  authAPI.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null,null,null,false))
      }
    })
}
export default authReducer