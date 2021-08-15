import React from "react";
import {initialStateType, setUsersAC} from "../../redux/users-reducer";
import styles from './users.module.css'


type UsersType = {
    users: initialStateType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers:(users:initialStateType[])=>void
}

const Users = (props: UsersType) => {
    if (props.users.length===0){
        props.setUsers( [
            {
                id: 1,
                photoUrl: 'https://uznayvse.ru/images/celebs/stethem_medium.jpeg',
                followed: false,
                fullName: 'Vadzim',
                status: "I am a boss",
                location: {city: "Minsk", country: "Belarus"}},
            {
                id: 2,
                photoUrl: 'https://uznayvse.ru/images/celebs/stethem_medium.jpeg',
                followed: true,
                fullName: "Sascha",
                status: "I am a boss too",
                location: {city: "Kiev", country: "Ukraine"}},
            {
                id: 3,
                photoUrl: 'https://uznayvse.ru/images/celebs/stethem_medium.jpeg',
                followed: true,
                fullName: "Katya",
                status: "I am a boss too",
                location: {city: "Moscow", country: "Russia"}}
        ])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {
                            u.followed
                            ? <button onClick={ () => props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <div>{u.fullName}</div><div>{u.status}</div>
            </span>
                <span>
                     <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
            </span>
            </div>)
        }
    </div>
}

export default Users;