import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";


type HeaderType = {
  isAuth: boolean
  login: null
  logout: ()=> void
}
const Header = (props: HeaderType) => {
  return (
    <header className={classes.header}>
      <img
        src='https://mobilemonkey.com/wp-content/uploads/2020/12/welcome-greeting-message-1024x536.png'/>
      <div className={classes.loginBlock}>
        {props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  )
}

export default Header;