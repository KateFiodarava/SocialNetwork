import Header from "./Header";
import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {statePropsType} from "../../redux/users-reducer";
import {AppPropsType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";
import {getAuthUserData, logout} from "../../redux/auth-reducer";


type mapStateToPropsType = {
  isAuth: boolean
  login: null
  logout: () => void
}

type HeaderContainerPropsType = {
  getAuthUserData: () => void
  isAuth: boolean
  login: null
  logout: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount() {
    this.props.getAuthUserData()
  }

  render() {
    return <Header isAuth={this.props.isAuth}
                   login={this.props.login}
                   logout={this.props.logout}/>
  }
}

const mapStateToProps = (state: AppPropsType): mapStateToPropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  logout: state.auth.logout
});
export default connect(mapStateToProps, {
  getAuthUserData,
  logout
})(HeaderContainer);
