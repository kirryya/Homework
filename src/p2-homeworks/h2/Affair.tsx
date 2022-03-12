import React from 'react'
import {FilterType} from "./HW2";
import s from "./Affairs.module.css"

type AffairPropsType = {
    _id: number
    priority: FilterType
    affair: string
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props._id)
    }// need to fix

    return (
        <div>
            <button className={s.buttonDelete} onClick={deleteCallback}>X</button>
            <span> {props.affair}</span>
            <span className={props.priority === "high" ? s.priorityHigh : s.priorityNormal}> {props.priority} </span>
        </div>
    )
}

export default Affair
