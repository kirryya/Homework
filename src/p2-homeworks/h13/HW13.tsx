import React from 'react';
import {Request} from "./Request";
import s from "../h4/HW4.module.css";
import style from "./HW13.module.css"

const Hw13 = () => {
    return (
        <div className={style.main}>
            <hr/>
            <div className={s.homework}>
                Homeworks 13
            </div>
            <div>
                <Request/>
            </div>
        </div>
    );
};

export default Hw13;