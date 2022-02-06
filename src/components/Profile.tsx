import React from "react";
import ProfileInfo from "./Profile/ProfileInfo/ProfileInfo";
import {ActionsTypes, ReduxStorePropsType} from "../redux/store";
import MyPostsContainer from "./Profile/MyPosts/MyPostsContainer";
import {updateStatus} from "../redux/profile-reducer";



export  type postsType = {
    id: number
    message: string
    likeCounter: number
}

export type ProfilePropsType ={
  profile:null
  status: string
  updateStatus: typeof updateStatus
}
const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus} />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;