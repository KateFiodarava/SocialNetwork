import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionsTypes, DialogsPageType, StatePropsType} from "../../redux/store";
import {Dispatch} from "redux";
import {initialStateType} from "../../redux/users-reducer";
import {AppPropsType} from "../../redux/redux-store";

type mapStateToPropsType ={
    dialogsPage: DialogsPageType
    isAuth:boolean
}

const mapStateToProps = (state: AppPropsType):mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth:state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        updateNewMessageBody: (body:string) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogContainer;