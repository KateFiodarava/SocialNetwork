import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {StatePropsType} from "../redux/store";
import {statePropsType} from "../redux/users-reducer";
import {AppPropsType} from "../redux/redux-store";


export  type postsType = {
  id: number
  message: string
  likeCounter: number
}

type mapStateType={
  profile:null
}
class ProfileContainer extends React.Component<any> {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId=2
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return (
      <Profile profile={this.props.profile}/>
    )
  }
}

let mapStateToProps = (state: AppPropsType):mapStateType => ({
  profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);