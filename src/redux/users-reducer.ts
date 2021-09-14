import {
  ActionsTypes,
  CurrentPageType,
  FollowActionType,
  toggleIsFetchingType, ToggleIsFollowingInProgressType,
  totalCountType,
  UnfollowActionType,
  UsersActionType,
} from "./store";
import {ProfilePropsType} from "../components/Profile";
import {userAPI} from "../api/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

export type locationType = {
  city: string
  country: string
}
export type initialStateType = {
  id: number
  photos: { small: string, lange: string }
  followed: boolean
  name: string
  status: string
  location: locationType

}
export type statePropsType = {
  users: initialStateType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  totalCount: number
  isFetching: boolean
  followingInProgress: []
}

const initialState: statePropsType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 20,
  currentPage: 1,
  totalCount: 0,
  isFetching: true,
  followingInProgress: []
}

const usersReducer = (state: statePropsType = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u
        })
      }
    case SET_USERS: {
      return {...state, users: action.users}
    }
    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage}
    }
    case SET_TOTAL_COUNT: {
      return {...state, totalUsersCount: action.count}
    }
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching}
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return <statePropsType>{
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id != action.userId)
      }
    }

    default:
      return state
  }
}
export const followSuccess = (userId: number): FollowActionType => ({
  type: FOLLOW,
  userId
})
export const unFollowSuccess = (userId: number): UnfollowActionType => ({
  type: UNFOLLOW,
  userId
})
export const setUsers = (users: initialStateType[]): UsersActionType => ({
  type: SET_USERS,
  users
})
export const setCurrentPage = (currentPage: number): CurrentPageType => ({
  type: SET_CURRENT_PAGE,
  currentPage
})
export const setTotalUsersCount = (totalCount: number): totalCountType => ({
  type: SET_TOTAL_COUNT,
  count: totalCount
})
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
})
export const toggleFollowingInProgress = (isFetching: boolean, userId: number): ToggleIsFollowingInProgressType => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
})
export const getUsers = (currentPage: number, pageSize: number) => {

  return (dispatch: Dispatch<ActionsTypes>) => {

    dispatch(toggleIsFetching(true));

    userAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items))
      dispatch(setTotalUsersCount(data.totalCount))
    })
  }
}

export const follow = (userId: number) => {
  return (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(toggleFollowingInProgress(true, userId));
    userAPI.followed(userId)
      .then(data => {
        if (data.resultCode == 0) {
          dispatch(followSuccess(userId));
        }
        dispatch(toggleFollowingInProgress(false, userId))
      })
  }
}

export const unFollow = (userId: number) => {
  return (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(toggleFollowingInProgress(true, userId));
    userAPI.unfollowed(userId)
      .then(data => {
        if (data.resultCode == 0) {
          dispatch(unFollowSuccess(userId));
        }
        dispatch(toggleFollowingInProgress(false, userId))
      })
  }
}
export default usersReducer