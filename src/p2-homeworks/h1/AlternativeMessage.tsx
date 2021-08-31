import React from 'react'
import s from './AlternativeMessage.module.css'
export type AlternativeMessageData = {
    avatar: string
    name: string
    time: string
    message: string
}


function AlternativeMessage(props: AlternativeMessageData) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt={'img2'} className={s.avatar}/>
            <div className={s.angle}/>
            <div className={s.cont}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default AlternativeMessage
