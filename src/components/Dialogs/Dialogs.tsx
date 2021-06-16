import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {RootStateType} from "../../redux/redux-store";


type PropsType = {
    state: RootStateType
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
        props.updateNewBodyMessage(body)
    }

    let dialogsElements = props.state.dialogPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.dialogPage.messages.map(m => <Message messages={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea className={s.area} value={props.state.dialogPage.newMessageBody}
                          onChange={onChangeHandler}>{props.state.dialogPage.newMessageBody}</textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
    );
}
export default Dialogs;