import React from "react";
import s from "./ProfileInfo.module.css"
import {ProfilePropsType} from "../../Profile";
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";



export type ProfileInfoPropsType ={
  profile:any
}
const ProfileInfo = (props:ProfileInfoPropsType) => {
  if (!props.profile) {
    return  <Preloader />
  }
    return (
        <div>
            {/*<div>*/}
            {/*    <img src={'https://encrypted-tbn0.gstatic.com/images?q=' +*/}
            {/*    'tbn:ANd9GcREbjs74kHNQ6EbVpQPwqe6hfqhPxpFu3whAg&usqp=CAU'}/>*/}
            {/*</div>*/}
            <div className={s.describeBlock}>
              <img src={props.profile.photos.large}/>
              <div>{props.profile.aboutMe}</div>
              <div>{props.profile.contacts.facebook}</div>
              <div>{props.profile.lookingForAJob === true ? 'ghbdtn': false} </div>
              <div>{props.profile.lookingForAJobDescription}</div>
              <div>{props.profile.fullName}</div>
               <ProfileStatus status={"hello"}/>
            </div>
        </div>

    )
}

export default ProfileInfo;