import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from "../h4/HW4.module.css";

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    return (
        <div>
            <hr/>

            <div className={s.homework}>
                Homeworks 11
            </div>

            <div>
                <span>{value1}</span>
                <SuperRange onChange={(e) => setValue1(+e.currentTarget.value)} />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
