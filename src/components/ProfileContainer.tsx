import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {StatePropsType} from "../redux/store";
import {statePropsType} from "../redux/users-reducer";
import {AppPropsType} from "../redux/redux-store";
import {userAPI} from "../api/api";


export  type postsType = {
  id: number
  message: string
  likeCounter: number
}

type mapStateType={
  profile:null
  isAuth:boolean
}
class ProfileContainer extends React.Component<any> {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId=2
    }
    this.props.getUserProfile(userId)
  }

  render() {
    if (!this.props.isAuth) return <Redirect to={'/login'}/>
    return (
      <Profile profile={this.props.profile}/>
    )
  }
}

let mapStateToProps = (state: AppPropsType):mapStateType => ({
  profile: state.profilePage.profile,
  isAuth:state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);