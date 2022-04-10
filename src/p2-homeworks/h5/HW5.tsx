import React from 'react'
import Header from './Header'
import Pages from './Pages'
import {HashRouter} from "react-router-dom";
import s from "../h4/HW4.module.css";

function HW5() {
    return (
        <div>
            <div className={s.homework}>React Homeworks</div>
            <HashRouter>
                <Header/>
                <Pages/>
            </HashRouter>
        </div>
    )
}

export default HW5
