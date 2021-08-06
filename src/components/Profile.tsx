import React from "react";
import ProfileInfo from "./Profile/ProfileInfo/ProfileInfo";
import {ActionsTypes, ReduxStorePropsType} from "../redux/store";
import MyPostsContainer from "./Profile/MyPosts/MyPostsContainer";



export  type postsType = {
    id: number
    message: string
    likeCounter: number
}


const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;