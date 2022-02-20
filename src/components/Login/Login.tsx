import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import s from "../common/FormsControls/FormsControls.module.css";
import {required} from "../../units/validators";
import {Input} from "../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppPropsType} from "../../redux/redux-store";

export type FormDataType ={
  email:string
  password:string
  rememberMe:boolean
}

const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={"Email"} name={"email"}
                 validate={required}
                 component ={Input}/>
        </div>
        <div>
          <Field placeholder={"Password"} type={"password"} name={"password"}
                 validate={required} component ={Input}/>
        </div>
        <div>
          <Field component ={Input}  name={"remember me"} type={"checkbox"}/> remember me
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
  )
}

 export const LoginReduxForm = reduxForm<FormDataType>({   form: 'email'})(LoginForm)

const Login = (props:any) => {
  const onSubmit = (formData:FormDataType) => {
    props.login(formData.email,formData.password,formData.rememberMe);
  }
  if (props.isAuth){
    return <Redirect to={"/profile"}/>
  }
  return (
    <div><h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}



const mapStateToProps =(state:AppPropsType) => ({
  isAuth:state.auth.isAuth
})
export default connect(mapStateToProps,{login}) (Login)