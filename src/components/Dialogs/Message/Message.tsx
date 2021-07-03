import React from 'react';
import s from './Message.module.css'

type MessageTypeProps = {
    message: string
    id: number
}

const Message = (props: MessageTypeProps) => {
    return <div className={s.dialogs}>{props.message}</div>
}



export default Message;