import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter:FilterType)=>void
    deleteAffairCallback: (id: number)=>void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter("all")} // need to fix
    const setHigh = () => {
        props.setFilter("high")} // need to fix
    const setMiddle = () => {
        props.setFilter("middle")}
    const setLow = () => {
        props.setFilter("low")
    }

   // const setClass =(filter:FilterType)=>{
     //   return s.button +(props.filter === filter? ' ' + s.active: ' ');
    //}
   // className={setClass('all')}className={setClass('high')}className={setClass("middle")}
   // className={setClass("low")}
    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll} >All</button>
            <button onClick={setHigh} >High</button>
            <button onClick={setMiddle} >Middle</button>
            <button onClick={setLow} >Low</button>
        </div>
    );
}

export default Affairs
