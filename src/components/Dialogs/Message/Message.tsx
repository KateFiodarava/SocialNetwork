import React from 'react';
import s from './Message.module.css'

type MessageTypeProps = {
    message: string
    id: number
}

const Message = (props: MessageTypeProps) => {
    // let newMessageElement: any = React.createRef();
    //
    // let addMessage = () => {
    //     let text = newMessageElement.current.value;
    //     alert(text)
    // }
    return <div>
        <div className={s.dialogs}>{props.message}</div>
        {/*<div>*/}
        {/*    <textarea ref={newMessageElement}></textarea>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*    <button onClick={addMessage}>Add message</button>*/}
        {/*</div>*/}
    </div>
}

export default Message;