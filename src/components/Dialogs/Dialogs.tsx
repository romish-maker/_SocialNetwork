import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux/store";
import {DialogPageType} from "../../redux/dialogs-reducer";


type PropsType = {
    dialogPage: DialogPageType
    dispatch: (action: any) => void
    updateNewBodyMessage: (body: string) => void
    SendBodyMessage: () => void
}

export const Dialogs = (props: PropsType) => {

    const addPost = () => {
        props.SendBodyMessage();
    }
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.currentTarget.value
        props.updateNewBodyMessage(body.toString())
    }

    let dialogsElements = props.dialogPage.dialogs.map((d: DialogsType) => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogPage.messages.map((m: MessagesType) => <Message messages={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea className={s.area} value={props.dialogPage.newMessageBody}
                          onChange={onChangeHandler}>{props.dialogPage.newMessageBody}</textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
    );
}
export default Dialogs;