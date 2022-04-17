import React from 'react'
import AlternativeMessage from "./AlternativeMessage";
import {Message} from "./Message";
import avatar from "./assets/images/avatar.png";

const messageData = {
    avatar: avatar,
    name: 'Some Name',
    message: 'some text some text some text some text some text some text some text some text ',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage/>
            <hr/>
        </div>
    )
}

export default HW1
