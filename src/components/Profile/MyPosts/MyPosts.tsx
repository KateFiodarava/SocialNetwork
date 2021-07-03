import React from "react";
import classes from './MyPosts.module.css'
import Post from 'MyPosts.module.css'

const MyPosts = (props:any) => {

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
               {props.posts}
            </div>
        </div>
    )
}

export default MyPosts;