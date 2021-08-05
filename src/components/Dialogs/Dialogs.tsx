import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {ReduxStorePropsType} from "../../redux/store";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


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
    // dialogs: Array<dialogsType>
    // messages: Array<messagesType>
    // newMessageBody: string
    // store: ReduxStorePropsType
    sendMessage:()=>void
    dialogsPage:any
    updateNewMessageBody:(body:string)=>void
}

const Dialogs = (props: DialogsPropsType) => {
    let state=props.dialogsPage;

    let dialogsElement = state.dialogs
        .map((d: { name: string; id: number; src: string }) => <DialogItem name={d.name} id={d.id} src={d.src}/>);

    let messagesElements = state.messages
        .map((m: { message: string; id: number }) => <Message message={m.message} id={m.id}/>);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage()
        // props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
        // props.store.dispatch(updateNewMessageBodyCreator(body))
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