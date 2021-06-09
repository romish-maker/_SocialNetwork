import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    ActionsTypes,
    DialogsType,
    MessagesType,
    SendBodyMessageActionCreator,
    UpdateNewBodyMessageActionCreator
} from "../../redux/state";


type PropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    dispatch: (action: ActionsTypes) => void
    newMessageBody: string
}

export const Dialogs = (props: PropsType) => {

    const addPost = () => {
        props.dispatch(SendBodyMessageActionCreator())
    }
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.currentTarget.value
        props.dispatch(UpdateNewBodyMessageActionCreator(body))
    }

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message messages={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea value={props.newMessageBody} onChange={onChangeHandler}>{props.newMessageBody}</textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
    );
}
export default Dialogs;