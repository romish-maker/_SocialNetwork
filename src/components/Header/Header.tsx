import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

const Header: React.FC<HeaderPropsType> = ({isAuth, login}) => {
    return <header className={s.header}>
        <img alt="images, beautiful place" src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />

        <div className={s.loginBlock}>
            { isAuth ? login : <NavLink to={'/login'}><button className={s.btn}>{login}</button></NavLink>}
        </div>
    </header>
}

export default Header;