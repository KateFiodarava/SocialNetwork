import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    initialStateType,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unFollowAC
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {AppPropsType} from "../../redux/redux-store";

type mapStateToPropsType = {
    users: initialStateType[]
    pageSize:number
    totalUsersCount: number
    currentPage: number
}

const mapStateToProps = (state: AppPropsType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);