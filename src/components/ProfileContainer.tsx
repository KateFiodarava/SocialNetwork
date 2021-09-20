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
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";


export  type postsType = {
  id: number
  message: string
  likeCounter: number
}

type mapStateType = {
  profile: null
}

class ProfileContainer extends React.Component<any> {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2
    }
    this.props.getUserProfile(userId)
  }

  render() {
    return (
      <div>
      <Profile profile={this.props.profile}/>
      </div>
    )
  }
}


const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state: AppPropsType): mapStateType => ({
  profile: state.profilePage.profile,
})

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default compose<React.ComponentType> (
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);
