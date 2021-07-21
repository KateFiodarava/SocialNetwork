import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addPostActionCreator, sendMessageCreator, StatePropsType, updateNewMessageBodyCreator} from "../../redux/state";

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
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
    newMessageBody: string
    store: Array<StatePropsType>
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.dialogs
        .map((d: { name: string; id: number; src: string }) => <DialogItem name={d.name} id={d.id} src={d.src}/>);

    let messagesElements = props.messages
        .map((m: { message: string; id: number }) => <Message message={m.message} id={m.id}/>);

    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e: any) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}

            </div>

            <div className={s.dialogs}>
                <div className={s.messages}>
                    <div> {messagesElements}</div>
                    <div>
                        <div><textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder='Enter your message'>
                    </textarea></div>
                        <div>
                            <button onClick={onSendMessageClick}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;