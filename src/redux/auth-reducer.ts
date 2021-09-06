import {
  ActionsTypes, authActionType, totalCountType
} from "./store";


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

export const setAuthUserData = (userId: null,email:null,login:null): authActionType => ({
  type: SET_USER_DATA,
  data: {userId,email,login}
})


export default authReducer