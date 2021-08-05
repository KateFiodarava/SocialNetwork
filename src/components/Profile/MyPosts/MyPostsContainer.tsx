import React from "react";
import {postsType} from "../../Profile";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {ReduxStorePropsType} from "../../../redux/store";


type MyPostsContainerPropsType = {
    // posts: Array<postsType>
    // dispatch: (action:any) => void
    store: ReduxStorePropsType
    // newPostText:string
}

const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    let state =props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let onPostChange = (text:string) => {
        let action= updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }
    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}/>)

}

export default MyPostsContainer;