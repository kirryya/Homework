import React from 'react'
import Header from './Header'
import Pages from './Pages'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            <div style={{fontSize: "x-large"}}>React Homeworks</div>
            <HashRouter>
                <Header/>
                <Pages/>
            </HashRouter>
        </div>
    )
}

export default HW5
