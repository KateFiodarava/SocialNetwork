import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import s from "../common/FormsControls/FormsControls.module.css";
import {required} from "../../units/validators";
import {Input} from "../common/FormsControls/FormsControls";

export type FormDataType ={
  login:string
  password:string

  rememberMe:boolean
}

const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={"Login"} name={"login"}
                 validate={required}
                 component ={Input}/>
        </div>
        <div>
          <Field placeholder={"Password"} name={"password"}
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

 export const LoginReduxForm = reduxForm<FormDataType>({   form: 'login'})(LoginForm)

const Login = () => {
  const onSubmit = (formData:FormDataType) => {
    console.log(formData);
  }
  return (
    <div><h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}


export default Login