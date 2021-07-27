import React from 'react';
import {SendBodyMessageActionCreator, UpdateNewBodyMessageActionCreator} from "../../redux/dialogs-reducer";
import {RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {AnyAction, Dispatch} from "redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        dispatch: dispatch,
        SendBodyMessage: () => {
            dispatch(SendBodyMessageActionCreator())
        },
        updateNewBodyMessage: (body: string) => { // body ?
            dispatch(UpdateNewBodyMessageActionCreator(body))
        }
    }
}

const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))
export default DialogsContainer;