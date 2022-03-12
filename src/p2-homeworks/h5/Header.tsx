import React from 'react'
import { NavLink } from 'react-router-dom';
import s from ".././h3/Greeting.module.css"


function Header() {
    return (
        <div>
            <NavLink to={'/pre-junior'} className={s.button}> PRE_JUNIOR </NavLink>
            <NavLink to={'/junior'} className={s.buttons}> JUNIOR </NavLink>
            <NavLink to={'/junior-plus'} className={s.button}> JUNIOR_PLUS </NavLink>
        </div>
    )
}

export default Header