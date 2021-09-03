import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType, DialogsType, MessagesType} from "../../redux/dialogs-reducer";
import {Redirect} from 'react-router-dom';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Dispatch} from 'redux';


type PropsType = {
    dialogPage: DialogPageType
    dispatch: (action: Dispatch<any>) => void
    SendBodyMessage: (message?: string) => void
    isAuth: boolean
}

export const Dialogs = (props: PropsType) => {

    // const addPost = () => {
    //     props.SendBodyMessage();
    // }

    let dialogsElements = props.dialogPage.dialogs.map((d: DialogsType) => <DialogItem name={d.name} key={d.id}
                                                                                       id={d.id}/>);
    let messagesElements = props.dialogPage.messages.map((m: MessagesType) => <Message messages={m.message}
                                                                                       key={m.id}/>);

    const addNewMessage = (formData: AddMessageFormDataType) => {
        props.SendBodyMessage(formData.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
}

type AddMessageFormDataType = {
    newMessageBody: string
}

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;