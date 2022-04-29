import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import s from "../h4/HW4.module.css";
import {SuperDoubleRange} from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(50)
    const [value2, setValue2] = useState(100)

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue1(newValue[0] as number);
        setValue2(newValue[1] as number)

    };

    return (
        <div>
            <hr/>

            <div className={s.homework}>
                Homeworks 11
            </div>

            <div>
                <span>{value1}</span>
                <SuperRange value={value1} onChange={(e) => setValue1(+e.currentTarget.value)}/>
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange value={[value1, value2]} handleChange={handleChange} />
                <span>{value2}</span>
            </div>

        </div>
    )
}

export default HW11
