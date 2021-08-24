import {
  ActionsTypes, CurrentPageType,
  FollowActionType, totalCountType,
  UnfollowActionType, UsersActionType,
} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

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
}

const initialState: statePropsType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 20,
  currentPage: 2,
  totalCount: 0
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
    default:
      return state
  }
}
export const followAC = (userId: number): FollowActionType => ({
  type: FOLLOW,
  userId
})
export const unFollowAC = (userId: number): UnfollowActionType => ({
  type: UNFOLLOW,
  userId
})
export const setUsersAC = (users: initialStateType[]): UsersActionType => ({
  type: SET_USERS,
  users
})
export const setCurrentPageAC = (currentPage: number): CurrentPageType => ({
  type: SET_CURRENT_PAGE,
  currentPage
})
export const setTotalUsersCountAC = (totalCount: number): totalCountType => ({
  type: SET_TOTAL_COUNT,
  count: totalCount
})

export default usersReducer