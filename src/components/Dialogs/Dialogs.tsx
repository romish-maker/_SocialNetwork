import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType, MessagesType,} from "../../redux/store";
import {SendBodyMessageActionCreator, UpdateNewBodyMessageActionCreator} from "../../redux/dialogs-reducer";


type PropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    dispatch: any
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

    const onEnter = ({charCode}: KeyboardEvent<HTMLTextAreaElement>) => {
        if (charCode === 13) {
            props.dispatch(SendBodyMessageActionCreator())
        }
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
                <textarea className={s.area} onKeyPress={onEnter} value={props.newMessageBody}
                          onChange={onChangeHandler}>{props.newMessageBody}</textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
    );
}
export default Dialogs;