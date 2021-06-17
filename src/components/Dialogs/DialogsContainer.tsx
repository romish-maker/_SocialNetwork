import React from 'react';
import {SendBodyMessageActionCreator, UpdateNewBodyMessageActionCreator} from "../../redux/dialogs-reducer";
import {RootStateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AnyAction, Dispatch} from "redux";

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogPage: state.dialogPage,
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;