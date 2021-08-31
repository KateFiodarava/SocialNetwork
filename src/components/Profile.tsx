import React from "react";
import ProfileInfo from "./Profile/ProfileInfo/ProfileInfo";
import {ActionsTypes, ReduxStorePropsType} from "../redux/store";
import MyPostsContainer from "./Profile/MyPosts/MyPostsContainer";



export  type postsType = {
    id: number
    message: string
    likeCounter: number
}

export type ProfilePropsType ={
  profile:null
}
const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;