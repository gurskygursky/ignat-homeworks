import React from 'react'
import classes from "./Message.module.css";

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}
function Message(props: MessagePropsType) {
    return (
        <div className={classes.chat}>
            <div className={classes.bubble + classes.me}>
                <img src={props.avatar}/>
            <h3 className={classes.dialogTitle}>
                {props.name}
            </h3>
            <p className={classes.dialogMessage}>
                {props.message}
            </p>
            <p className={classes.dialogTime}>
                {props.time}
            </p>
            </div>
        </div>
    )
}

export default Message
