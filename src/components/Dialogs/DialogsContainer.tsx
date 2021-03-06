import React from 'react';
import {SendBodyMessageActionCreator} from "../../redux/dialogs-reducer";
import {RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {AnyAction, compose, Dispatch} from "redux";
import Dialogs from "./Dialogs";

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        dispatch: dispatch,
        SendBodyMessage: (message: string) => {
            dispatch(SendBodyMessageActionCreator(message))
        },
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);