import styles from "./users.module.css";
import userPhoto from "../../assets/images/images.png";
import React from "react";
import {initialStateType} from "../../redux/users-reducer";

type UsersType = {
  users: initialStateType[]
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  pageSize: number
  totalUsersCount: number
  currentPage: number
  onPageChanged: (pageNumber:number)=> void
}

export const Users =(props:UsersType)=>{
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i=1; i<=pagesCount; i++) {
    pages.push(i);
  }

return  (
  <div>
    <div>
      {pages.map(p => {
        return  <span
          className={props.currentPage === p ? styles.selectedPage:''}
          onClick={(e)=>{props.onPageChanged(p)}}>{p}</span>
      })}
    </div>
    {
      props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img
                          src={u.photos.small != null ? u.photos.small : userPhoto}
                          className={styles.userPhoto}/>
                    </div>
                    <div>
                        {
                          u.followed
                            ? <button onClick={() => props.unfollow(u.id)}>
                              Unfollow
                            </button>
                            : <button onClick={() => props.follow(u.id)}>
                              Follow
                            </button>
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
)}
