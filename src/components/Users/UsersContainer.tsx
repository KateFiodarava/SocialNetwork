import React from "react";
import {connect} from "react-redux";
import {
  follow,
  initialStateType, setCurrentPage, setTotalUsersCount,
  setUsers, toggleIsFetching,
  unFollow
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {AppPropsType} from "../../redux/redux-store";
import axios from "axios";
import {Users} from "./Users";
import preloader from "../../assets/images/preloader.gif"
import {Preloader} from "../common/Preloader/Preloader";

type mapStateToPropsType = {
  users: initialStateType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean

}
type mapDispatchType = {
  follow: (userId: number) => void
  unFollow: (userId: number) => void
  setUsers: (users: initialStateType[]) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (totalCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
}
type UsersAPIType = {
  users: initialStateType[]
  follow: (userId: number) => void
  unFollow: (userId: number) => void
  setUsers: (users: initialStateType[]) => void
  pageSize: number
  totalUsersCount: number
  currentPage: number
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (totalCount: number) => void
  isFetching: boolean
  toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<UsersAPIType> {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items)
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
        follow={this.props.follow}
        unfollow={this.props.unFollow}
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
    isFetching: state.usersPage.isFetching
  }
}

// const mapDispatchToProps = (dispatch: Dispatch):mapDispatchType => {
//     return {
//     //     follow: (userId: number) => {
//     //         dispatch(follow(userId));
//     //     },
//     //     unfollow: (userId: number) => {
//     //         dispatch(unFollow(userId));
//     //     },
//     //     setUsers: (users: initialStateType[]) => {
//     //         dispatch(setUsers(users))
//     //     },
//     //     setCurrentPage: (currentPage: number) => {
//     //         dispatch(setCurrentPage(currentPage))
//     //     },
//     //     setTotalUsersCount: (totalCount: number) => {
//     //         dispatch(setTotalUsersCount(totalCount))
//     //     },
//     //     toggleIsFetching: (isFetching: boolean) => {
//     //         dispatch(toggleIsFetching(isFetching))
//     //     }
//     // }
// }

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
} as mapDispatchType)
(UsersContainer)


// const Users = (props: UsersType) => {

//     if (props.users.length===0){
//         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
//             props.setUsers(response.data.items);
//         })
//     }
//         // props.setUsers( [
//             // {
//             //     id: 1,
//             //     photos: 'https://uznayvse.ru/images/celebs/stethem_medium.jpeg',
//             //     followed: false,
//             //     name: 'Vadzim',
//             //     status: "I am a boss",
//             //     location: {city: "Minsk", country: "Belarus"}},
//             // {
//             //     id: 2,
//             //     photos: 'https://uznayvse.ru/images/celebs/stethem_medium.jpeg',
//             //     followed: true,
//             //     name: "Sascha",
//             //     status: "I am a boss too",
//             //     location: {city: "Kiev", country: "Ukraine"}},
//             // {
//             //     id: 3,
//             //     photos: 'https://uznayvse.ru/images/celebs/stethem_medium.jpeg',
//             //     followed: true,
//             //     name: "Katya",
//             //     status: "I am a boss too",
//             //     location: {city: "Moscow", country: "Russia"}
//             // }
//         // ])
//
//     return <div>
//         {
//             props.users.map(u => <div key={u.id}>
//                 <span>
//                     <div>
//                         <img src={u.photos.small !=null ? u.photos.small:userPhoto}
//                              className={styles.userPhoto}/>
//                     </div>
//                     <div>
//                         {
//                             u.followed
//                             ? <button onClick={ () => props.unfollow(u.id)}>
//                                   Unfollow
//                             </button>
//                             : <button onClick={() => props.follow(u.id)}>
//                                   Follow
//                             </button>
//                         }
//                     </div>
//                 </span>
//                 <span>
//                     <div>{u.name}</div><div>{u.status}</div>
//             </span>
//                 <span>
//                      <div>{'u.location.country'}</div>
//                     <div>{'u.location.city'}</div>
//             </span>
//             </div>)
//         }
//     </div>
// }
//
// export default Users;