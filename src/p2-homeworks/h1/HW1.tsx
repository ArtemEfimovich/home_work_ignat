import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";
import s from './Message.module.css'


const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Arthur',
    message: 'npm start pressed?',
    time: '22:00',
}

const messageData2 = {
    avatar: 'https://avatarko.ru/img/kartinka/21/multfilm_pokemon_pikachu_20287.jpg',
    name: 'Viktor',
    message: 'yes of course. ',
    time: '22:05',
}


function HW1() {
    return (
        <div className={s.backgrouund}>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <AlternativeMessage
                avatar={messageData2.avatar}
                name={messageData2.name}
                message={messageData2.message}
                time={messageData2.time}
            />

        </div>
    );
}

export default HW1
