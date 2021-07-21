import React, {RefObject} from "react";
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import {postsType} from "../../Profile";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";
import {messagesType} from "../../Dialogs/Dialogs";

type MyPostsPropsType = {
    posts: Array<postsType>
    newPostText: string
    dispatch: (action:any) => void
}


const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map((p: { message: string; likeCounter: number; }) => <Post message={p.message}
                                                                                          likeCounter={p.likeCounter}/>)
    let newPostElement= React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action= updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;