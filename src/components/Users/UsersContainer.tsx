import React from "react";
import {connect} from "react-redux";
import {
  follow,
  followSuccess, getUsers,
  initialStateType, setCurrentPage, setTotalUsersCount,
  setUsers, toggleFollowingInProgress, toggleIsFetching, unFollow,
  unFollowSuccess
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {AppPropsType} from "../../redux/redux-store";
import axios from "axios";
import {Users} from "./Users";
import preloader from "../../assets/images/preloader.gif"
import {Preloader} from "../common/Preloader/Preloader";
import { userAPI} from "../../api/api";

type mapStateToPropsType = {
  users: initialStateType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: []

}
type mapDispatchType = {
  followSuccess: (userId: number) => void
  unFollowSuccess: (userId: number) => void
  setUsers: (users: initialStateType[]) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (totalCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
  toggleFollowingInProgress:(isFetching:boolean,userId:number) =>void
  getUsers:(currentPage:number, pageSize:number)=>void
  follow: (userId: number) => void
  unFollow: (userId: number) => void

}
type UsersAPIType = {
  users: initialStateType[]
  followSuccess: (userId: number) => void
  unFollowSuccess: (userId: number) => void
  setUsers: (users: initialStateType[]) => void
  pageSize: number
  totalUsersCount: number
  currentPage: number
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (totalCount: number) => void
  isFetching: boolean
  toggleIsFetching: (isFetching: boolean) => void
  toggleFollowingInProgress:(isFetching:boolean,userId:number) =>void
  followingInProgress:[]
  getUsers:(currentPage:number, pageSize:number)=>void
  follow: (userId: number) => void
  unFollow: (userId: number) => void
}

class UsersContainer extends React.Component<UsersAPIType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage,this.props.pageSize);
    //
    // this.props.toggleIsFetching(true);
    //
    // userAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsers(data.items)
    //     this.props.setTotalUsersCount(data.totalCount)
    //   })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true);

    userAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items)
      })
  }

  render() {

    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        followSuccess={this.props.followSuccess}
        unfollowSuccess={this.props.unFollowSuccess}
        toggleFollowingInProgress={this.props.toggleFollowingInProgress}
        followingInProgress={this.props.followingInProgress}
        follow={this.props.follow}
        unFollow={this.props.unFollow}
      />
    </>
  }
}


const mapStateToProps = (state: AppPropsType): mapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}


export default connect(mapStateToProps, {
  followSuccess,
  unFollowSuccess,
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  toggleIsFetching,
  toggleFollowingInProgress,
  getUsers,
  follow,
  unFollow

} as mapDispatchType)
(UsersContainer)

