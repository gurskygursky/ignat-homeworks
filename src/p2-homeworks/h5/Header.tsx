import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
import {PATH} from "./Routes";

export const Header = () => {
    return (
        // <div>
        //     // add NavLinks
        //
        // </div>

    <div className={s.dropdown}>
        <h3 className={s.dropbtn}>react homeworks:</h3>
        <div className={s.dropdownContent}>
            <NavLink to={PATH.PRE_JUNIOR}>PRE-JUNIOR</NavLink>
            <NavLink to={PATH.JUNIOR}>JUNIOR</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}>JUNIOR-PLUS</NavLink>
            </div>
        </div>
    )
}

