import React from 'react';
import s from "./SiteBar.module.css";
import {NavLink} from "react-router-dom"

const NavBar = () => {
  return (
    <nav className={s.header}>
      <NavLink activeClassName={s.activeLink} to="/MainPage">Страница товара</NavLink>
      <NavLink to="/Users">Пользователи</NavLink>
      <NavLink to="/AddProduct">Сравнения Добавления Товара</NavLink>
    </nav>
  )
}

export default NavBar;