import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, initialStateType, setUsersAC, unFollowAC} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {AppPropsType} from "../../redux/redux-store";

type mapStateToPropsType = {
    users: initialStateType[]
}

const mapStateToProps = (state: AppPropsType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users: initialStateType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);