import React from 'react'
import {MessageType} from '../HW1';
import s from './Message.module.css'
import avatar from './../avatar.png';

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType;
};

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    style={{width: '64px', height: '64px'}}
                    // создаёт студент
                    // src={avatar}
                    src={props.message.user.avatar}
                    //
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {/*создаёт студент*/}
                        {props.message.user.name}
                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                        {props.message.message.text}
                        {/**/}
                    </pre>
                </div>
                <div id={'hw1-time-' + props.message.id} className={s.time}>
                    {/*создаёт студент*/}
                    {props.message.message.time}
                    {/**/}
                </div>
            </div>

        </div>
    )
}

export default Message
