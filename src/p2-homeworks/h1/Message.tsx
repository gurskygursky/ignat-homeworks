import React from 'react'
import style from './Message.module.css'

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

export function Message(props: MessagePropsType) {
    return (
        <div className={style.container}>
            <div className={style.imessage}>
                <p className={style.fromThem}>
                    <img className={style.image} src={props.avatar}/>
                    <h3>{props.name}</h3>
                    <a className={style.messageText}>{props.message}</a>
                    <br/>
                    <a className={style.time}>{props.time}</a>
                </p>
                <p className={style.fromMe}>
                    <img className={style.image} src={props.avatar}/>
                    <h3>{props.name}</h3>
                    <a className={style.messageText}>{props.message}</a>
                    <br/>
                    <a className={style.time}>{props.time}</a>
                </p>
            </div>
        </div>
    )
}