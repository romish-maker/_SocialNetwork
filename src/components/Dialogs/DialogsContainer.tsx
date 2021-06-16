import React from 'react';
import {SendBodyMessageActionCreator, UpdateNewBodyMessageActionCreator} from "../../redux/dialogs-reducer";
import {RootStateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";


type PropsType = {
    state: RootStateType
    dispatch: (action: any) => void
}

export const DialogsContainer = (props: PropsType) => {

    const addPost = () => {
        props.dispatch(SendBodyMessageActionCreator())
    }
    const onChangeHandler = (body: string) => {
        props.dispatch(UpdateNewBodyMessageActionCreator(body))
    }

    return (
        <Dialogs
            updateNewBodyMessage={onChangeHandler}
            SendBodyMessage={addPost}
            state={props.state}
            dispatch={props.dispatch}
        />
    );
}
export default DialogsContainer;