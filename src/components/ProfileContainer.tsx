import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {
  getStatus,
  getUserProfile,
  setUserProfile, updateStatus
} from "../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {StatePropsType} from "../redux/store";
import {statePropsType} from "../redux/users-reducer";
import {AppPropsType} from "../redux/redux-store";
import {userAPI} from "../api/api";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";


export  type postsType = {
  id: number
  message: string
  likeCounter: number
}

type mapStateType = {
  profile: null
  status:string
  authorizedUserId: string
  isAuth:string
}

class ProfileContainer extends React.Component<any> {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId =this.props.authorizedUserId
    }
    this.props.getUserProfile(+userId)
    this.props.getStatus(+userId)
  }

  render() {
    return (
      <div>
      <Profile profile={this.props.profile}
               status={this.props.status}
               updateStatus={this.props.updateStatus}/>
      </div>
    )
  }
}


const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state: AppPropsType): mapStateType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth:state.auth.isAuth
})

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//let getUserStatus;
export default compose<React.ComponentType> (
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);
