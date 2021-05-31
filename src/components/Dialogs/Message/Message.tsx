import React from 'react';
import s from './../Dialogs.module.css';

type messageProps = {
    messages: string
}

export const Message = (props: messageProps) => {

    return (
        <div>
            <div className={s.message}>{props.messages}</div>

        </div>
    )
}

export default Message;