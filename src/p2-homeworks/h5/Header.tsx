import React from 'react'
import { NavLink } from 'react-router-dom';
import s from ".././h3/Greeting.module.css"
import b from "./Header.module.css"


function Header() {
    return (
        <div className={b.header}>
            <NavLink to={'/pre-junior'} className={s.button}> PRE_JUNIOR </NavLink>
            <NavLink to={'/junior'} className={s.buttons}> JUNIOR </NavLink>
            <NavLink to={'/junior-plus'} className={s.button}> JUNIOR_PLUS </NavLink>
            <span className={s.homework}>Menu</span>
        </div>
    )
}

export default Header
