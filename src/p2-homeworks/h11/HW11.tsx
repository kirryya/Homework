import React, {ChangeEvent, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import s from "../h4/HW4.module.css";
import {SuperDoubleRange} from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState<number>(50)
    const [value2, setValue2] = useState<number>(100)

    const DoubleRangeChange = (event: Event, newValue: Array<number>) => {
        setValue1(newValue[0] as number);
        setValue2(newValue[1] as number);
    };

    const SingleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue1(+e.currentTarget.value)
    };

    return (
        <div>
            <hr/>

            <div className={s.homework}>
                Homeworks 11
            </div>

            <div>
                <span>{value1}</span>
                <SuperRange value={value1} onChange={SingleRangeChange}/>
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange value={[value1, value2]} handleChange={DoubleRangeChange}/>
                <span>{value2}</span>
            </div>

        </div>
    )
}

export default HW11
