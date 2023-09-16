import React, { useState } from 'react'
import { FaAlignRight, FaUserGraduate } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import s from './Header.module.css'
import { Link } from 'react-router-dom';
import {  FaBook, FaSistrix ,FaComments } from "react-icons/fa";

import { GiExitDoor } from "react-icons/gi";
const HeaderStidy = () => {
  const [menu, setMenu] = useState(false)
 const DeleteLocalStorage = () => localStorage.clear()
  return (
    <div className={s.header}>
        <div className={s.logo}>
        <img src="../../public/logo.png" alt="logo" />
            <p>BrainTrain</p>
        </div>
      
    <div className={s.navItems}>
        <ul className={
          menu ? 
          s.formNavigation_active : s.formNavigation}>

          <li className={s.navigation}>
          <Link to="/StidyPage" className={s.logo} onClick={()=> setMenu(false)}>
          <div className={s.iconMenu}>
            <FaUserGraduate
            size={25}
            color='var( --icon_color)'/>
                <p>Моя страница</p> 
                </div>
          
            
              </Link>
            </li>
          <li className={s.navigation}>
          <Link to="/myLessons" className={s.logo} onClick={()=> setMenu(false)}>
          <div className={s.iconMenu}>
            <FaBook
            size={25}
            color='var( --icon_color)'/>
                <p>Мои курсы</p> 
                </div>
              </Link>
              
            </li>
          <li className={s.navigation}>
          <Link to="/search" className={s.logo} onClick={()=> setMenu(false)}>
          <div className={s.iconMenu}>

            <FaSistrix
               size={25}
               color='var( --icon_color)'/>
            <p>Поиск курсов</p>
          </div>
          
              </Link></li>
          <li className={s.navigation}>
          <Link to="/stidyHelp" className={s.logo} onClick={()=> setMenu(false)}>
          <div className={s.iconMenu}>

            <FaComments
               size={25}
               color='var( --icon_color)'/>
            <p>Служба поддержки</p>
          </div>
          
              </Link></li>
          <li className={s.navigation}>
          <Link to="/" className={s.logo} onClick={()=> {setMenu(false),DeleteLocalStorage()} }>
          <div className={s.iconMenu}>
          <GiExitDoor
          size={25}
          color='var( --icon_color)'/>
          <p>

           Выход
          </p>
           </div>
           </Link></li>       
        </ul>
    </div>
    <div onClick={()=> setMenu(!menu)} className={s.miniMenu}>
     { !menu ? 
         ( <FaAlignRight
          size={35}
          color='var(--btn_color)'
          />) :
          (
            <AiOutlineClose
            size={35}
            color='red'/>
          )}
        </div>
    </div>
  )
}

export default HeaderStidy