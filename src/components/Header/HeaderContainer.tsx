import Header from "./Header";
import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {statePropsType} from "../../redux/users-reducer";
import {AppPropsType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";
import {getAuthUserData} from "../../redux/auth-reducer";


type mapStateToPropsType={
  isAuth: boolean
  login:null
}

type HeaderContainerPropsType={
  getAuthUserData:()=>void
  isAuth: boolean
  login:null
}
 class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount() {
  this.props.getAuthUserData()
  }

  render() {
    return <Header />
  }
}

const mapStateToProps=(state:AppPropsType):mapStateToPropsType=>({
  isAuth: state.auth.isAuth,
  login:state.auth.login,
});
export default connect(mapStateToProps,{getAuthUserData})(HeaderContainer);
