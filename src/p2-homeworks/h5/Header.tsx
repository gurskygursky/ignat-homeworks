import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import style from '../h5/Header.module.css';

function Header() {

    const [show, setShow] = useState<boolean>(false);

    const onClickShowMenuHandler = () => {
        if (!show) {
            setShow(true);
        }
        if (show) {
            setShow(false);
        }
    }
    console.log(show)

    return (
        <div className={style.container}>
            <div className={style.dropdown}>
                <button onClick={onClickShowMenuHandler}
                        className={style.dropbtn}>Dropdown</button>
                {show &&
                    <div className={style.dropdownContent}>
                        <ul style={{listStyle: 'none'}}>
                            <li><NavLink to={'pre-junior'}>PRE-JUNIOR</NavLink></li>
                            <li><NavLink to={'junior'}>JUNIOR</NavLink></li>
                            <li><NavLink to={'junior-plus'}>JUNIOR-PLUS</NavLink></li>
                            <li><NavLink to={'middle'}>MIDDLE</NavLink></li>
                        </ul>
                    </div>
                }
            </div>
            {/*// add NavLinks*/}
            {/*<ul style={{listStyle: 'none'}}>*/}
            {/*    <li><NavLink to={'pre-junior'}>PRE-JUNIOR</NavLink></li>*/}
            {/*    <li><NavLink to={'junior'}>JUNIOR</NavLink></li>*/}
            {/*    <li><NavLink to={'junior-plus'}>JUNIOR-PLUS</NavLink></li>*/}
            {/*    <li><NavLink to={'middle'}>MIDDLE</NavLink></li>*/}
            {/*</ul>*/}
        </div>
    )
}

export default Header
