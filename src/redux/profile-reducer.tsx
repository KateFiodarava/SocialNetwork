import {
  ActionsTypes,
  AddPostActionType, ProfilePageType,
  setUserProfileType,
  StatePropsType, StatusActionType,
  UpdateNewPostTextActionType
} from "./store";
import {postsType} from "../components/Profile";
import {profileAPI, userAPI} from "../api/api";
import {Dispatch} from "redux";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

type statePropsType = {
  posts: Array<postsType>
  newPostText: string
  profile: null
  status:string
}

let initialState = {
  posts: [
    {id: 1, message: 'Hi,how are you?', likeCounter: 12},
    {id: 2, message: "It's my first post", likeCounter: 11},
  ],
  newPostText: 'it-kamasutra.com',
  profile: null,
  status:'',
}

export const profileReducer = (state: statePropsType = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likeCounter: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    }

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    case SET_STATUS:
      return {
        ...state,
       status: action.status
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    default:
      return state
  }
}
export const addPostActionCreator = (newPostText:string): AddPostActionType => ({type: ADD_POST,newPostText})
export const setUserProfile = (profile: null): setUserProfileType => ({
  type: SET_USER_PROFILE,
  profile
})
export const setStatus = (status:string): StatusActionType => ({type: SET_STATUS,status})

export const getUserProfile=(userId:number) => (dispatch:Dispatch) => {
  userAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data))
  })
}
export const getStatus=(userId:number) => (dispatch:Dispatch) => {
  profileAPI.getStatus(userId).then(response => {
    dispatch(setStatus(response.data))
  })
}
export const updateStatus=(status:string) => (dispatch:Dispatch) => {
  profileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode ===0 ) {
      dispatch(setStatus(status))
    }
  })
}
export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType =>
  ({type: UPDATE_NEW_POST_TEXT, newText: text})

