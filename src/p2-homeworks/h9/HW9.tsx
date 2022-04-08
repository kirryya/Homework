import React from 'react'
import Clock from './Clock'
import s from "../h4/HW4.module.css";

function HW9() {
    return (
        <div className={s.homework}>
            <hr/>
            Homeworks 9

            {/*should work (должно работать)*/}
            <Clock/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
            <hr/>
        </div>
    )
}

export default HW9
