import {
    ActionsTypes,
    FollowActionType,
    UnfollowActionType, UsersActionType,
} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET_USERS";

type locationType = {
    city: string
    country: string
}
type initialStateType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: locationType

}
type statePropsType = {
    users: initialStateType[]
}

let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: 'Vadzim',
            status: "I am a boss",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 2,
            followed: true,
            fullName: "Sascha",
            status: "I am a boss too",
            location: {city: "Kiev", country: "Ukraine"}
        },
        {
            id: 3,
            followed: true,
            fullName: "Katya",
            status: "I am a boss too",
            location: {city: "Moskov", country: "Russia"}
        }
    ],
    newPostText: 'it-kamasutra.com'
}

export const usersReducer = (state: statePropsType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                })
            }


        default:
            return state
    }
}
export const followAC = (userId: number): FollowActionType => ({type: FOLLOW, userId})
export const unFollowAC = (userId: number): UnfollowActionType => ({type: UNFOLLOW, userId})
export const setUsersAC = (userId: number): UsersActionType => ({type: SET_USERS, userId})

