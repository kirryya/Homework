import React from 'react'
import { NavLink } from 'react-router-dom';


function Header() {
    return (
        <div>
            <NavLink to={'/Homework/pre-junior'}> PRE_JUNIOR </NavLink>
            <NavLink to={'/Homework/junior'}> JUNIOR </NavLink>
            <NavLink to={'/Homework/junior-plus'}> JUNIOR_PLUS </NavLink>
        </div>
    )
}

export default Header
