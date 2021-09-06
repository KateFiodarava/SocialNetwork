import {
    ActionsTypes,
    AddPostActionType, ProfilePageType,
    setUserProfileType,
    StatePropsType,
    UpdateNewPostTextActionType
} from "./store";
import {postsType} from "../components/Profile";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE='SET_USER_PROFILE';

type statePropsType = {
    posts: Array<postsType>
    newPostText: string
    profile:null
}

let initialState = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likeCounter: 12},
        {id: 2, message: "It's my first post", likeCounter: 11},
    ],
    newPostText: 'it-kamasutra.com',
    profile: null
}

export const profileReducer = (state: statePropsType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCounter: 0
            }
            return {
                ...state,
                posts:[...state.posts,newPost],
               newPostText: ''
            }
        }

        case UPDATE_NEW_POST_TEXT:
          return  {
              ...state,
            newPostText:action.newText
        }
        case SET_USER_PROFILE:
            return  {
                ...state,
                profile:action.profile
            }
        default:
            return state
    }
}
export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})
export const setUserProfile = (profile:null): setUserProfileType => ({type: SET_USER_PROFILE,profile})

export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

