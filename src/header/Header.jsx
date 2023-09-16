import React, { useState } from 'react'
import { FaAlignRight } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import s from './Header.module.css'
import { Link } from 'react-router-dom';
import { FaAddressCard , FaCashRegister, FaScroll } from "react-icons/fa";
import { ImExit } from "react-icons/im";
const Header = () => {
  const [menu, setMenu] = useState(false)
  
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
          <Link to="/" className={s.logo} onClick={()=> setMenu(false)}>
          <div className={s.iconMenu}>
            <FaScroll
            size={30}
            color='var( --icon_color)'/>
                <p>О нас</p> 
                </div>
          
            
              </Link>
            </li>
          <li className={s.navigation}>
          <Link to="/login" className={s.logo} onClick={()=> setMenu(false)}>
          <div className={s.iconMenu}>
            <ImExit
            size={30}
            color='var( --icon_color)'/>
                <p>Вход</p> 
                </div>
              </Link>
              
            </li>
          <li className={s.navigation}>
          <Link to="/registr" className={s.logo} onClick={()=> setMenu(false)}>
          <div className={s.iconMenu}>

            <FaAddressCard
               size={35}
               color='var( --icon_color)'/>
            <p>Регистрация</p>
          </div>
          
              </Link></li>
          <li className={s.navigation}>
          <Link to="/entranceTeacher" className={s.logo} onClick={()=> setMenu(false)}>
          <div className={s.iconMenu}>
          <FaCashRegister
          size={35}
          color='var( --icon_color)'/>
          <p>

           Авторам
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

export default Header