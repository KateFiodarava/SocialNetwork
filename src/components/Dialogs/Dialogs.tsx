import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogsPageType, ReduxStorePropsType} from "../../redux/store";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {MyPostReduxForm, MyPostsForm} from "../Profile/MyPosts/MyPosts";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../units/validators";

export  type dialogsType = {
    name: string
    id: number
    src: string
}
export type messagesType = {
    message: string
    id: number
}
type DialogsPropsType = {
    sendMessage:(newMessageBody:string)=>void
    dialogsPage:DialogsPageType
    updateNewMessageBody:(body:string)=>void
    isAuth:boolean
}

type DialogsFormDataType={
    newMessageBody:string
}
const maxLength50 = maxLengthCreator(50)

const Dialogs = (props: DialogsPropsType) => {
    let state=props.dialogsPage;

    let dialogsElement = state.dialogs
        .map((d: { name: string; id: number; src: string }) => <DialogItem
          name={d.name} id={d.id} src={d.src}/>);

    let messagesElements = state.messages
        .map((m: { message: string; id: number }) => <Message
          message={m.message} id={m.id}/>);

    let newMessageBody = state.newMessageBody;

    // let onSendMessageClick = () => {
    //     props.sendMessage()
    // }
    // let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let body = e.target.value;
    //     props.updateNewMessageBody(body);
    // }

    const onSubmit = (formData:DialogsFormDataType) => {
       props.sendMessage(formData.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
                <div className={s.messages}>
                    <div> {messagesElements}</div>
                {/*    <div>*/}
                {/*        <div><textarea*/}
                {/*            value={newMessageBody}*/}
                {/*            onChange={onNewMessageChange}*/}
                {/*            placeholder='Enter your message'>*/}
                {/*    </textarea></div>*/}
                {/*        <div>*/}
                {/*            <button onClick={onSendMessageClick}>Send</button>*/}
                {/*        </div>*/}

                < DialogsReduxForm onSubmit={onSubmit}/>
                </div>
        </div>
    )
}


export default Dialogs;

export const DialogsForm :React.FC<InjectedFormProps<DialogsFormDataType>> =(props)=>{
    return (
      <form onSubmit={props.handleSubmit}>
          <div>
              <Field  name={"newMessageBody"} component ={Textarea}
                      validate={[required,maxLength50]}/>
          </div>
          <div>
              <button>Send</button>
          </div>
      </form>
    )
}
export const DialogsReduxForm = reduxForm<DialogsFormDataType>({   form: 'AddDialogs'})(DialogsForm)