import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionsTypes, DialogsPageType, StatePropsType} from "../../redux/store";
import {compose, Dispatch} from "redux";
import {initialStateType} from "../../redux/users-reducer";
import {AppPropsType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import React from "react";

type mapStateToPropsType ={
    dialogsPage: DialogsPageType
}

const mapStateToProps = (state: AppPropsType):mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        // updateNewMessageBody: (body:string) => {
        //     dispatch(updateNewMessageBodyCreator(body));
        // },
        sendMessage: (newMessageBody:string) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}
compose<React.ComponentType> (
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)

const AuthRedirectComponent =withAuthRedirect(Dialogs)
const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogContainer;