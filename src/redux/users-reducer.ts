import {
  ActionsTypes, CurrentPageType,
  FollowActionType, toggleIsFetchingType, totalCountType,
  UnfollowActionType, UsersActionType,
} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

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
}

const initialState: statePropsType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 20,
  currentPage: 1,
  totalCount: 0,
  isFetching: true
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

    default:
      return state
  }
}
export const follow = (userId: number): FollowActionType => ({
  type: FOLLOW,
  userId
})
export const unFollow = (userId: number): UnfollowActionType => ({
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
export const toggleIsFetching = (isFetching: boolean):toggleIsFetchingType=> ({
  type: TOGGLE_IS_FETCHING,
  isFetching
})

export default usersReducer