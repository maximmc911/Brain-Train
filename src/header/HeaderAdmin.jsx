import React, { useState } from 'react'
import { FaAlignRight, FaUserGraduate } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import s from './Header.module.css'
import { Link } from 'react-router-dom';
import { FaEnvira, FaChartLine, FaComments, FaRubleSign } from "react-icons/fa";

import { GiExitDoor , GiTeacher } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";
const HeaderAdmin = () => {
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
          <Link to="/AdminPage" className={s.logo} onClick={()=> setMenu(false)}>
          <div className={s.iconMenu}>
            <RiAdminFill
            size={30}
            color='var( --icon_color)'/>
                <p>Админка</p> 
                </div>
          
            
              </Link>
            </li>
          <li className={s.navigation}>
          <Link to="/FinanseAdmin" className={s.logo} onClick={()=> setMenu(false)}>
          <div className={s.iconMenu}>
            <FaRubleSign
            size={30}
            color='var( --icon_color)'/>
                <p>Финансы</p> 
                </div>
              </Link>
              
            </li>
          <li className={s.navigation}>
          <Link to="/StatisticAdmin" className={s.logo} onClick={()=> setMenu(false)}>
          <div className={s.iconMenu}>

            <FaChartLine
               size={35}
               color='var( --icon_color)'/>
            <p>Статистика</p>
          </div>
          
              </Link></li>
             
          <li className={s.navigation}>
          <Link to="/" className={s.logo} onClick={()=> {setMenu(false)} }>
          <div className={s.iconMenu}>
          <GiExitDoor
          size={35}
          color='var( --icon_color)'/>
          <p>

           Выход
          </p>
           </div>
           </Link></li>       
        </ul>
    </div>
    <div onClick={()=> (setMenu(!menu),DeleteLocalStorage())} className={s.miniMenu}>
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

export default HeaderAdmin