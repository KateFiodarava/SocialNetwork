import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import {postsType} from "../../Profile";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {FormDataType, LoginReduxForm} from "../../Login/Login";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type MyPostsPropsType = {
    posts: Array<postsType>
    newPostText: string
    addPost:(newPostText:string)=>void
    updateNewPostText:(text:string) =>void
}

type MyPostFormDataType={
  newPostText:string
}


const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map
    ((p: { message: string; likeCounter: number; }) =>
      <Post message={p.message} likeCounter={p.likeCounter}/>)
    // let onAddPost = () => {
    //     props.addPost();
    // }
    // let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
    //     let text = e.currentTarget.value;
    //     props.updateNewPostText(text);
    // }

  const onSubmit = (formData:MyPostFormDataType) => {
    props.addPost(formData.newPostText);
  }
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            {/*<div>*/}
            {/*    <textarea onChange={onPostChange}*/}
            {/*              value={props.newPostText}/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <button onClick={onAddPost}>Add post</button>*/}
            {/*</div>*/}
            <div className={classes.posts}>
                {postsElements}
            </div>
         < MyPostReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export  const MyPostsForm :React.FC<InjectedFormProps<MyPostFormDataType>> =(props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field  name={"newPostText"} component ={'textarea'}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}
export const MyPostReduxForm = reduxForm<MyPostFormDataType>({   form: 'newPostText'})(MyPostsForm)

export default MyPosts;