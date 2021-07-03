import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';


type DialogItemType = {
    id: string
    name: string
}
type MessageType = {
    message: string
}

const DialogItem = (props: DialogItemType) => {
    let path = '/dialog/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name} </NavLink>
        </div>
    )
}

const Message = (props: MessageType) => {
    return <div className={s.dialogs}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Vadim' id='1'/>
                <DialogItem name='Sveta' id='2'/>
                <DialogItem name='Virtor' id='3'/>
                <DialogItem name='Olga' id='4'/>
                <DialogItem name='Kate' id='5'/>


            </div>

            <div className={s.messages}>
                <Message message='Hello'/>
                <Message message='Hi'/>
                <Message message='Yo'/>

            </div>
        </div>
    )
}

export default Dialogs;