import React from "react";
import MyPosts from './Profile/MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from "./Profile/ProfileInfo/ProfileInfo";



export  type postsType = {
    id: number
    message: string
    likeCounter: number
}



const Profile = (props:any) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile;