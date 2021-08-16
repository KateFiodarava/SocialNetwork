import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import {postsType} from "../../Profile";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


type MyPostsPropsType = {
    posts: Array<postsType>
    newPostText: string
    addPost:()=>void
    updateNewPostText:(text:string) =>void
}


const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map
    ((p: { message: string; likeCounter: number; }) =>
      <Post message={p.message} likeCounter={p.likeCounter}/>)
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;