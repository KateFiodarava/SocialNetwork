import React from "react";
import MyPosts from './Profile/MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from "./Profile/ProfileInfo/ProfileInfo";
import {ActionsTypes} from "../redux/store";



export  type postsType = {
    id: number
    message: string
    likeCounter: number
}

type ProfileTypeProps={
   posts: Array<postsType>
    newPostText:string
    dispatch: (action:ActionsTypes)=>void
}

const Profile = (props:ProfileTypeProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} dispatch={props.dispatch} newPostText={props.newPostText}/>
        </div>
    )
}

export default Profile;