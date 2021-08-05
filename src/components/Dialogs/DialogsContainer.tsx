import {ReduxStorePropsType} from "../../redux/store";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {ChangeEvent} from "react";
import Dialogs from "./Dialogs";
import store from "../../redux/redux-store";


type DialogsPropsType = {
    // dialogs: Array<dialogsType>
    // messages: Array<messagesType>
    // newMessageBody: string
    store: ReduxStorePropsType
    // sendMessage:()=>void
    // dialogsPage:any
    // updateNewMessageBody:any
}

const DialogsContainer = (props: DialogsPropsType) => {
    let state=props.store.getState().dialogsPage

    // let dialogsElement = state.dialogsPage.dialogs
    //     .map((d: { name: string; id: number; src: string }) => <DialogItem name={d.name} id={d.id} src={d.src}/>);
    //
    // let messagesElements = state.dialogsPage.messages
    //     .map((m: { message: string; id: number }) => <Message message={m.message} id={m.id}/>);
    //
    // let newMessageBody = state.dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (body:string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
        // let body = e.target.value;
        // props.store.dispatch(updateNewMessageBodyCreator(body))
    }


    return (
       <Dialogs updateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsPage={state}
                />
    )
}


export default DialogsContainer;