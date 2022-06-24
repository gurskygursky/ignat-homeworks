import React from 'react';
import style from './Message.module.css';

type PropsType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}

function Message(props: PropsType) {
    const {avatar, name, message, time} = props;

    // const bubbleStyle = `${style.bubble} && ${style.bubbleBottomLeft}`
    const bubbleStyle = `${style.bubble}`
    return (
        <div className={style.message}>
            <div className={bubbleStyle} contentEditable>
                <div style={{textAlign: 'left'}}>
                <img style={{width: '64px', height: '64px'}} src={avatar} alt={'avatar'}/>
                </div>
                <div style={{textAlign: 'left', fontFamily: 'Helvetica', fontStyle: 'normal', fontSize: 'medium', paddingTop: '5px'}}>{name}</div>
                <div style={{textAlign: 'left', fontFamily: 'Helvetica', fontStyle: 'normal', fontSize: 'small', paddingTop: '5px'}}>{message}</div>
                <div style={{textAlign: 'left', fontFamily: 'Helvetica', fontStyle: "italic", fontSize: 'small', paddingTop: '5px'}}>{time}</div>
            </div>
        </div>
    )
}

export default Message
