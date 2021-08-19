import React from "react";
import {initialStateType, setUsersAC} from "../../redux/users-reducer";
import styles from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/images.png';

type UsersType = {
  users: initialStateType[]
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: initialStateType[]) => void
}

class Users extends React.Component<UsersType>{
componentDidMount() {
  axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
    this.props.setUsers(response.data.items)
  })
}

  render() {
  return (
    <div>
      {
        this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img
                          src={u.photos.small != null ? u.photos.small : userPhoto}
                          className={styles.userPhoto}/>
                    </div>
                    <div>
                        {
                          u.followed
                            ? <button onClick={() => this.props.unfollow(u.id)}>
                              Unfollow
                            </button>
                            : <button onClick={() => this.props.follow(u.id)}>
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
  )
}
      }


      export default Users;

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