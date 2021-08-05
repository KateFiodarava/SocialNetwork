import React from "react";
import ProfileInfo from "./Profile/ProfileInfo/ProfileInfo";
import {ActionsTypes, ReduxStorePropsType} from "../redux/store";
import MyPostsContainer from "./Profile/MyPosts/MyPostsContainer";



export  type postsType = {
    id: number
    message: string
    likeCounter: number
}

type ProfileTypeProps={
   // posts: Array<postsType>
   //  newPostText:string
   //  dispatch: (action:ActionsTypes)=>void
    store: ReduxStorePropsType
}

const Profile = (props:ProfileTypeProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}
                              // posts={props.posts}
                              // dispatch={props.dispatch}
                              // newPostText={props.newPostText}
            />
        </div>
    )
}

export default Profile;