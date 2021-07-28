import {ActionsTypes, SendMessageActionType, StatePropsType, UpdateNewMessageBodyActionType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state: any, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}
export const sendMessageCreator = (): SendMessageActionType => ({type: SEND_MESSAGE}) as SendMessageActionType
export const updateNewMessageBodyCreator = (body: string): UpdateNewMessageBodyActionType =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

    export default dialogsReducer