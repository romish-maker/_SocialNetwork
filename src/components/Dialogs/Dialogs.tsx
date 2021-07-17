import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType, DialogsType, MessagesType} from "../../redux/dialogs-reducer";
import { Redirect } from 'react-router-dom';


type PropsType = {
    dialogPage: DialogPageType
    dispatch: (action: any) => void
    updateNewBodyMessage: (body: string) => void
    SendBodyMessage: () => void
    isAuth: boolean
}

export const Dialogs = (props: PropsType) => {

    const addPost = () => {
        props.SendBodyMessage();
    }
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.currentTarget.value
        props.updateNewBodyMessage(body.toString())
    }

    let dialogsElements = props.dialogPage.dialogs.map((d: DialogsType) => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = props.dialogPage.messages.map((m: MessagesType) => <Message messages={m.message} key={m.id}/>);


    if(!props.isAuth) return <Redirect to={'/login'}/>;
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