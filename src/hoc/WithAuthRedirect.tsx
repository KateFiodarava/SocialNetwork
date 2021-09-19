import {Redirect} from "react-router-dom";
import {AppPropsType} from "../redux/redux-store";
import {connect} from "react-redux";
import React, {ComponentType} from "react";


type MapStateToPropsType = {
  isAuth: boolean
}

let mapStateToPropsRedirect = (state: AppPropsType): MapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth
  }
}
export function withAuthRedirect <T>(Component: ComponentType<T>){
  function RedirectComponent(props: MapStateToPropsType) {
    let {isAuth,...restProps}=props
    if (!isAuth) return <Redirect to='/login'/>
    return <Component {...restProps as T}/>
  }

  const ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)
  return ConnectedAuthRedirectComponent;
}