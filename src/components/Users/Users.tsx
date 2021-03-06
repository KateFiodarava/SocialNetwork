import styles from "./users.module.css";
import userPhoto from "../../assets/images/images.png";
import React from "react";
import {
  follow,
  initialStateType,
  toggleFollowingInProgress, unFollow
} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom'
import {userAPI} from "../../api/api";
import {ToggleIsFollowingInProgressType} from "../../redux/store";

type UsersType = {
  users: initialStateType[]
  followSuccess: (userId: number) => void
  unfollowSuccess: (userId: number) => void
  pageSize: number
  totalUsersCount: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
  followingInProgress: []
  follow: (userId: number) => void
  unFollow: (userId: number) => void
}

export const Users = (props: UsersType) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map(p => {
          return <span
            className={props.currentPage === p ? styles.selectedPage : ''}
            onClick={(e) => {
              props.onPageChanged(p)
            }}>{p}</span>
        })}
      </div>
      {
        props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                      <NavLink to={'profile/' + u.id}>
                        <img
                          src={u.photos.small != null ? u.photos.small : userPhoto}
                          className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                          ? <button
                            disabled={props.followingInProgress
                              .some(id => id === u.id)}
                            onClick={() => {
                              props.unFollow(u.id)
                            }}>Unfollow</button>


                          : <button
                            disabled={props.followingInProgress
                              .some(id => id === u.id)}
                            onClick={() => {
                              props.follow(u.id)
                            }}>Follow</button>
                        }
                    </div>
                </span>
            <span>
                    <div>{u.name}</div><div>{u.status}</div>
            </span>
            <span>
                     <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
            </span>
          </div>
        )
      }
    </div>
  )
}
