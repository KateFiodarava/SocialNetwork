import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

export  type dialogsType = {
    name: string
    id: number
}
export type messagesType = {
    message: string
    id: number
}

const Dialogs = (props:any) => {

    let dialogsElement = props.dialogs
        .map((d: { name: string; id: number; }) => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.messages
        .map((m: { message: string; id: number; }) => <Message message={m.message} id={m.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={s.dialogs}>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}


export default Dialogs;