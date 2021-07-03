import React from "react";
import MyPosts from './Profile/MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from "./Profile/ProfileInfo/ProfileInfo";


const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;