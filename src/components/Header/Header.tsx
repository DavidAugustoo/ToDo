import style from '../Header/Header.module.css';

import logo from '../../assets/logo.png'

export function Header() {
    return(
        <header className={style.header}>
            <img src={logo} alt="Logo ToDo" />
        </header>
    )
}