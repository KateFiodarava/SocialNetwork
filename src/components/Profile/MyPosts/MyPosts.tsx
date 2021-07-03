import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message='Hi,how are you?' likeCounter={15}/>
                <Post message="It's my first post" likeCounter={20}/>

            </div>
        </div>


    )
}

export default MyPosts;