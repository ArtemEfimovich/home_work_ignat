import React from 'react'
import {AffairType, FilterType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id:number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div>
            // show some text
            <div>{props.affair.name}</div>
            <div>[{props.affair.priority}]</div>
            <button onClick={deleteCallback}>x</button>
        </div>
    )
}

export default Affair